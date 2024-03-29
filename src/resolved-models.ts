import { getModelForClass } from "@typegoose/typegoose";
import { Comment } from "./models/comment";
import { Community } from "./models/community";
import { Project } from "./models/project";
import { ProjectPosting } from "./models/project-posting";
import { Role } from "./models/role";
import { Society } from "./models/society";
import { University } from "./models/university";
import { User } from "./models/user";
import { Post } from "./models/post";
import { Event } from "./models/event";
import { Company } from "./models/company";

export const CommentModel = getModelForClass(Comment);
export const CommunityModel = getModelForClass(Community);
export const CompanyModel = getModelForClass(Company);
export const EventModel = getModelForClass(Event);
export const PostModel = getModelForClass(Post);
export const ProjectPostingModel = getModelForClass(ProjectPosting)
export const ProjectModel = getModelForClass(Project);
export const RoleModel = getModelForClass(Role);
export const SocietyModel = getModelForClass(Society)
export const UniversityModel = getModelForClass(University)
export const UserModel = getModelForClass(User);