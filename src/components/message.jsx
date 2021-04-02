import React from 'react';

export const Message = ({props}) => {
    if(props) {
        console.log("props is true")
        return (
        
            <div className="text-center">
                {console.log(props)}
                
                <h3 className="message-header">Thank You</h3>
                <div class="message-body"> We will reply to your message in next 24h. Have a nice day! ;-) </div>
            </div>
        )
    }else {
        console.log("props is false")
        return null
    }
    // return (
        
    //     <div className="text-center">
    //         {console.log(props)}
            
    //         <h3 className="message-header">Thank You</h3>
    //         <div class="message-body"> We will reply to your message in next 24h. Have a nice day! ;-) </div>
    //     </div>
    // )
}
