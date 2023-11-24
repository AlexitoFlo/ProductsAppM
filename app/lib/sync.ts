import { SyncDatabaseChangeSet, synchronize } from "@nozbe/watermelondb/sync";
import { supabase } from "./supabase"; 
import { database } from "./watermelon";

  await synchronize({
    database,
    pullChanges:async ({ lastPulledAt, schemaVersion, migration }) => {
      const { data, error } = await supabase.rpc('pull', {
        last_pulled_at: lastPulledAt,
      })

      const { changes, timestamp } = data as {
        changes: SyncDatabaseChangeSet
        timestamp: number
      }

      return { changes, timestamp }
    },
    pushChanges:async ({ changes, lastPulledAt }) => {
      const { error } = await supabase.rpc('push', { changes })      
    },
    sendCreatedAsUpdated: true,
  })