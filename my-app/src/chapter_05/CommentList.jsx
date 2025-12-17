import React from "react"
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name = {"김수안"} comment = {"안녕하세요, 김수안입니다."}/>
        </div>
    );
}

export default CommentList;