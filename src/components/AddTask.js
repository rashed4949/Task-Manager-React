import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  //submit Task
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add time & Day"
          type="text"
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="save" />
    </form>
  );
};

export default AddTask;
