import {connect} from "react-redux";
import Maze from "./Maze";
import {generateNewGameData, setIsLoadData, setShowResult} from "../../redux/mazeReducer";

const mapStateToProps = (state) =>({
    maze: state.maze,
    fieldSize: state.maze.fieldSize,
    markerPozition: state.maze.markerPozition,
});

const MazeContainer = connect(mapStateToProps, {generateNewGameData, setShowResult, setIsLoadData})(Maze);

export default MazeContainer;