import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { appId,serverSecret } from "./Config";

const Room = () =>{
    
    const {roomId} = useParams();
    
    const meeeting = (element) =>{
        const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            Date.now().toString()
            );
            const zc = ZegoUIKitPrebuilt.create(token);

            zc.joinRoom({
                container: element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.GroupCall
                },
                showScreenSharingButton:false,
                sharedLinks:[{
                    name:"Copy link",
                    url:window.location.href
                }]
            })

    }
    return(
        <div ref={meeeting} style={{width:"100vw", height:"100vh"}}>
            
        </div>
    )
}

export default Room;