const FilterButton = (props) => {
    return (
        <button className="btn btn-light"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            <span>{props.name}</span>
        </button>
    );
}
export default FilterButton;