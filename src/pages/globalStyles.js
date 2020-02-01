import { makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles({
    main: {
        background: '#282c34',
        color: 'white',
        padding: '20px',
        border: '1px solid gray',
        borderRadius: 3,
        height: '100%',
        maxWidth: '90%',
    },
});

export default useGlobalStyles;
