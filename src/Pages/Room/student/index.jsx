import React from 'react';
import {LiveRole, ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';


function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

export default function  RoomPageStudent() {
    const {roomId} = useParams()    
    const {name} = useParams()    
    let role = useParams(window.location.href)['role'] || 'Host';
    role = role === 'Host' ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;

    const myMeeting = async(element) =>{
        const appID =84410017;
        const serverSecret ='199cb1102346c37ed50eeb46eb1cf5da';
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  randomID(5),
        name);
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            // container: document.querySelector("#root"),
            showPreJoinView:false,
            whiteboardConfig:[
              {
                showAddImageButton: true,
                showCreateAndCloseButton: true,
              },
            ],
            sharedLinks: [
              {
                name: 'Personal link',
                url:
                  window.location.protocol + '//' + 
                  window.location.host + `/room/${name}/${roomId}/Student`
              },
            ],  
            scenario:{
                mode:ZegoUIKitPrebuilt.LiveStreaming,
                config: {
                    role,
                },
                
            },
           
        }); 
    }
  return (

    <>
    <div ref={myMeeting} style={{ width: '100vw', height: '100vh' }}>
    </div>
    </>
  )
}
