import { IGitHubUser } from "types";

export const isGitHubUser = (user: any): user is IGitHubUser => "id" in user;
