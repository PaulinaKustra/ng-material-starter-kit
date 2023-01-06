export interface InfluencersModel {
  name: string;
  avatar: string;
  followedBy: FollowedBy[];
  id: string;
}
export interface FollowedBy {
  name: string;

}
