import React from "react"
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name = {"김수안"} comment = {"안녕하세요, 김수안입니다."}/>
            <Comment name = {"김유정"} comment = {"리액트 재밌어요🎶"} />
        </div>
    );
}

export default CommentList;