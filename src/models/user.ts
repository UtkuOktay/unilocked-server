import { Project } from "./project";
import { University } from "./university";
import { Post } from "./post";
import { Role } from "./role";
import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Profile } from "./profile";


export class User extends Profile{
  @prop()
  first_name?: string;
  @prop()
  last_name?: string;
  @prop()
  avatar_url?: string;
  @prop()
  about?: string;
  @prop()
  gender?: string;
  @prop({ select: false })
  email?: string; //!
  @prop({ select: false })
  password?: string; //!
  @prop({ select: false })
  created_at?: Date; //!
  @prop({ select: false })
  updated_at?: Date; //!
  @prop()
  background?: string;

  @prop({default: 'User'})
  type: string;
 
  @prop({ select: false })
  available_space?: string; //!;
  @prop({ select: false })
  email_verified_at?: Date; //!;
  @prop()
  display_name?: string;
  @prop({ select: false })
  has_password?: boolean; //!;
  @prop({ ref: () => Role,autopopulate: true })
  roles?: Ref<Role>[];
  @prop({ ref: () => Post, select: false })
  posts?: Ref<Post>[];
  @prop({ ref: () => Event, select: false })
  createdEvents?: Ref<Event>[];
  @prop({ ref: () => Event, select: false })
  participatedEvents?: Ref<Event>[];
  @prop({ ref: () => User, select: false })
  following?: Ref<User>[];
  @prop()
  university?: University;
  @prop()
  company?: string;
  @prop({ ref: () => Post, select: false })
  projectsParticipated?: Ref<Post>[];

  @prop({ ref: () => Post, select: false })
  postsSaved?: Ref<Post>[];
}


