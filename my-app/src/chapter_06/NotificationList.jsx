import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        message: "점심 식사 시간입니다.",
    },
    {
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications, // 빈 배열을 state에 넣음
                }); // 생성자에서는 앞으로 사용할 데이터를 state에 넣어 초기화
            } else{
                clearInterval(timer);
            }
        }, 1000); // 1초마다 정해진 작업을 수행
    }
    componentWillUnmount(){
        if(timer){
            clearInterval(timer); // 기존 타이머가 존재할 경우 제거, 언마운트 이후에 타이머가 돌아가지 않게 함
        }
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message = {notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;