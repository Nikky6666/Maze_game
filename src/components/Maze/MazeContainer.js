import {connect} from "react-redux";
import Maze from "./Maze";
import {generateNewGameData, setIsLoadData, setIsDisplayResult} from "../../redux/mazeReducer";

const mapStateToProps = (state) =>({
    maze: state.maze,
});

const MazeContainer = connect(mapStateToProps, {generateNewGameData, setIsDisplayResult, setIsLoadData})(Maze);

export default MazeContainer;