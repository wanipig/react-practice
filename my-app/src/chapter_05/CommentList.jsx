import React from "react"
import Comment from "./Comment";

const comments = [
    {
        name: "김수안",
        comment: "안녕하세요, 김수안입니다.",
    },
    {
        name: "김유정",
        comment: "리액트 재밌어요🎶",
    },
    {
        name: "이로하",
        comment: "저도 리액트 배워보고 싶어요!",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;