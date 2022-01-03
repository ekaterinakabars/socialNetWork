import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // let dialogs = [
  //   {
  //     id: 1,
  //     name: "Dima",
  //   },
  //   {
  //     id: 2,
  //     name: "Sergio",
  //   },
  //   {
  //     id: 3,
  //     name: "Katrina",
  //   },
  //   {
  //     id: 4,
  //     name: "Mask",
  //   },
  //   {
  //     id: 5,
  //     name: "Victoria",
  //   },
  // ];

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  // let messages = [
  //   {
  //     id: 1,
  //     message: "Hi",
  //   },
  //   {
  //     id: 2,
  //     message: "Haw are you?",
  //   },
  //   {
  //     id: 3,
  //     message: "I'm fine,thank you",
  //   },
  // ];

  let messageElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};
export default Dialogs;
