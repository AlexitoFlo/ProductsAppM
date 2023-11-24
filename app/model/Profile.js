import { Model, Q, Relation } from "@nozbe/watermelondb";
import { date, readonly, text } from "@nozbe/watermelondb/decorators";

// En esta línea se importran los modelos con los que se tenga relación.
// import { Stack } from "./Stack"; 

export class Profile extends Model {
  static table = "profiles";

  @readonly @date("created_at") createdAt = Date;
  @readonly @date("updated_at") updatedAt = Date;

  static associations = {
    ["stacks"]: {
      type: "has_many",
      foreignKey: "profile_id",
    }
  };

  @text("name") name = String;
  @text("website") website = String;
}