import faker from 'faker'

const CHANGE_MARKER_POSITION = 'maze/mazeReducer/CHANGE_MARKER_POSITION';
const SET_DIRECTIONS = 'maze/mazeReducer/SET_DIRECTIONS';
const SET_IS_DISPLAY_RESULT = 'maze/mazeReducer/SET_IS_DISPLAY_RESULT';
const SET_IS_LOAD_DATA = 'maze/mazeReducer/SET_IS_LOAD_DATA';


export const DIRECTIONS = {
    up: 'up',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
};
const initialState = {
    fieldSize: 5,
    startPosition: {
        x: 2,
        y: 3
    },
    directions: [
        /*  {direction: 'left', id: faker.random.uuid()},
          {direction:  'up', id: faker.random.uuid()},
          {direction:  'up', id: faker.random.uuid()},
          {direction:  'up', id: faker.random.uuid()},
          {direction:  'right', id: faker.random.uuid()},
          {direction:   'right', id: faker.random.uuid()},
          {direction:  'right', id: faker.random.uuid()},
          {direction:  'bottom', id: faker.random.uuid()},
          {direction:  'bottom', id: faker.random.uuid()},
          {direction:  'left', id: faker.random.uuid()},*/
    ],
    resultPosition: {
        x: 3,
        y: 2
    },
    isDisplayResult: false,
    isLoadData: true,
    directionsCount: 15,
};

const mazeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MARKER_POSITION: {
            const newMarkerPosition = {
                x: Math.floor(Math.random() * state.fieldSize),
                y: Math.floor(Math.random() * state.fieldSize)
            }
            return {
                ...state, startPosition: newMarkerPosition
            }
        }
            ;
        case SET_DIRECTIONS: {
            const newDirections = [];
            let previousDirection = '';
            let currentResultMarkerPosition = state.startPosition;
            for (let i = 0; i < state.directionsCount; i++) {
                let tryAgain = true;
                let direction = '';
                while (tryAgain) {
                    const nexStepNumber = Math.floor(Math.random() * 4);
                    switch (nexStepNumber) {
                        case 0: {
                            if (currentResultMarkerPosition.y === 0 || previousDirection === DIRECTIONS.bottom) continue;
                            direction = DIRECTIONS.up;
                            currentResultMarkerPosition = {
                                ...currentResultMarkerPosition,
                                y: currentResultMarkerPosition.y - 1
                            };
                            tryAgain = false;
                            break;
                        }
                        case 1: {
                            if (currentResultMarkerPosition.x === state.fieldSize - 1 || previousDirection === DIRECTIONS.left) continue;
                            direction = DIRECTIONS.right;
                            currentResultMarkerPosition = {
                                ...currentResultMarkerPosition,
                                x: currentResultMarkerPosition.x + 1
                            };
                            tryAgain = false;
                            break;
                        }
                        case 2: {
                            if (currentResultMarkerPosition.y === state.fieldSize - 1 || previousDirection === DIRECTIONS.up) continue;
                            direction = DIRECTIONS.bottom;
                            currentResultMarkerPosition = {
                                ...currentResultMarkerPosition,
                                y: currentResultMarkerPosition.y + 1
                            };
                            tryAgain = false;
                            break;
                        }
                        case 3: {
                            if (currentResultMarkerPosition.x === 0 || previousDirection === DIRECTIONS.right) continue;
                            direction = DIRECTIONS.left;
                            currentResultMarkerPosition = {
                                ...currentResultMarkerPosition,
                                x: currentResultMarkerPosition.x - 1
                            };
                            tryAgain = false;
                            break;
                        }
                    }
                }
                previousDirection = direction;
                const newDirectionObj = {direction, id: faker.random.uuid()};
                newDirections.push(newDirectionObj);
            }
            return {
                ...state, directions: newDirections,
                resultPosition: currentResultMarkerPosition,
                isLoadData: true
            }
        }
        case SET_IS_DISPLAY_RESULT:
        case SET_IS_LOAD_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
};

export const generateNewGameData = () => (dispatch, getState) => {
    dispatch(changeMarkerPosition());
    dispatch(setDirections())
};

const changeMarkerPosition = () => ({type: CHANGE_MARKER_POSITION});
const setDirections = () => ({type: SET_DIRECTIONS});
export const setIsDisplayResult = (isDisplayResult) => ({type: SET_IS_DISPLAY_RESULT, payload: {isDisplayResult}});
export const setIsLoadData = (isLoadData) => ({type: SET_IS_LOAD_DATA, payload: {isLoadData}});

export default mazeReducer;