import React from "react";
import Person from "./Person/Person";
import PropTypes from "prop-types";

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });

persons.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default persons;
