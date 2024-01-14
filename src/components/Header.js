import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, addButtonShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={addButtonShow ? "Close" : "Add"}
        color={addButtonShow ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
