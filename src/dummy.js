// import firebase from "firebase"

// const firebaseConfig = {
//   apiKey: "AIzaSyCAiE4KwJfGVLa4pI4N0fo_jGsrwWIE958",
//   authDomain: "slack-clone-uttam.firebaseapp.com",
//   projectId: "slack-clone-uttam",
//   storageBucket: "slack-clone-uttam.appspot.com",
//   messagingSenderId: "158955099952",
//   appId: "1:158955099952:web:d8b0c9bba7c7e9773edaf5"
// };

// const firebaseApp = firebase.initializeapp(firebaseConfig)

// const db = firebaseApp.firestore()
// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider()


// export {db , auth, provider}

{roomDetails && roomMessages && (
<ChatContainer>
            
            {/* //only if roomDetails & roomMessages is provided show rest
            // need to use react fragment */}
            
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map((doc)=>{
                    const {message, timestamp, user, userImage} = doc.data()
                    return(
                        <Message
                            message= {message}
                            // key = {doc.id}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    )
                })}
                <ChatBottom ref={chatRef}> 

                </ChatBottom>
            </ChatMessages>

            <ChatInput 
                chatRef={chatRef}
                channelName= {roomDetails?.data().name}
                channelId = {roomId}
            />
        </ChatContainer>

)}


<ChatContainer>
            {/* {roomDetails && roomMessages && (
            //only if roomDetails & roomMessages is provided show rest
            // need to use react fragment
            <> */}
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map((doc)=>{
                    const {message, timestamp, user, userImage} = doc.data()
                    return(
                        <Message
                            message= {message}
                            // key = {doc.id}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    )
                })}
                <ChatBottom ref={chatRef}> 

                </ChatBottom>
            </ChatMessages>

            <ChatInput 
                chatRef={chatRef}
                channelName= {roomDetails?.data().name}
                channelId = {roomId}
            />
            {/* </>
                
            )} */}
        </ChatContainer>


