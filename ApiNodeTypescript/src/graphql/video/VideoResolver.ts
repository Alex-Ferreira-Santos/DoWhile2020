import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Video from "./Video";
import VideoSchema from "../../model/VideoSchema";

@InputType()
class VideoInput{
    @Field()
    description: string;
    @Field()
    name: string;
    @Field()
    category: string;
    @Field()
    _id: string;
}

@Resolver(Video)
class VideoResolver{
    @Query(()=>[Video])
    async videos(){
        const videos = await VideoSchema.find()
        return videos
    }

    @Mutation(()=>Video)
    async createVideos(@Arg("videoInput") videoInput:VideoInput){
        const videos = await VideoSchema.create(videoInput)
    }
}

export default VideoResolver