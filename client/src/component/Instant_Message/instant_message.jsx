import React from 'react';
import style from './instant_message.module.css';



class Instant_Message extends React.Component {
    super(props) {
        this.state = {};
        this.closeForm = this.closeForm.bind(this);
    }
    openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
    closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

render () {

    return (
        <div className={style.chatPopup} id={style.myForm}>
  <form className={style.formContainer}>
    <h1>Chat</h1>

    <label ><b>Message</b></label>
    <textarea placeholder="Type message.." className={style.msg} ></textarea>

    <button type="submit" className={style.btn}>Send</button>
    <button  type="button" onClick={this.closeForm}>Close</button>
  </form>
</div>
    )
}

}
    
export default Instant_Message;

// action="/action_page.php"
// for="msg"
// 
// 