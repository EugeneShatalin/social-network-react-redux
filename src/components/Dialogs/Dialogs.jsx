import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage; //помещаем в переменную часть стейта, которая храниться в разделе dialogsPage

    //с помощью map беребираем диалоги в стейте и отрисовываем на странице
    //передавая на каждом этапе через пропсы данные в компоненту DialogItem
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    //с помощью map беребираем сообщения в стейте и отрисовываем на странице
    //передавая на каждом этапе через пропсы данные в компоненту Message
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    //функциит для вызова колбека из props для передачи action в store
    //функция для добавления сообщения
    let addNewMessag = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessag}/>
        </div>
    )
};


export default Dialogs;