import propTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node.isRequired,
};
