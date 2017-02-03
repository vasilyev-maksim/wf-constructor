export const COLORS = {
    PRIMARY: '#da4f4a',
    PRIMARY_LIGHT: '#ffe8e7',
    // PRIMARY: '#58A1CD',
    // PRIMARY_LIGHT: '#dff6ff',
    PRIMARY_CONTRAST: '#FFF'
};

export const TASK_BLOCK = {
    WIDTH: 130,
    HEIGHT: 50,
    PADDING: 5,
    BORDER: {
        style: 'solid',
        radius: 0,
        color: COLORS.PRIMARY,
        width: 1
    },
    COVER: {
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.PRIMARY_CONTRAST
    }
};

export const TASK_SCENARIO = {
    PADDING: 10,
    BORDER: {
        style: 'dotted',
        color: COLORS.PRIMARY,
        width: 1
    },
    ARROW_BLOCK_WIDTH: 40
};

export const EDITOR = {
    CONTENT: {
        WIDTH: 1000,
        HEIGHT: 400,
    },
    CORNER: {
        WIDTH: 100,
        HEIGHT: 40,
    },
    BORDER: {
        style: 'solid',
        color: COLORS.PRIMARY,
        width: 1
    },
};

export const styles = {
    statusColors: {
        1: {backgroundColor: '#cacaca', color: 'black'},
        2: {backgroundColor: '#cacaca', color: 'black'},
        3: {backgroundColor: '#f5a673', color: 'black'},
        4: {backgroundColor: '#97f5ad', color: 'black'},
        5: {backgroundColor: '#ff9494', color: 'black'},
        6: {backgroundColor: '#ffe18b', color: 'black'},
    },
};