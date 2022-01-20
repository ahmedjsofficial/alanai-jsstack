import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
   card_footer: {
    padding: '0.5rem 1rem',
    background: '#d8d8d8',
    border: '1px solid rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  activeCard: {
    backgroundColor: '#000 !important',    
  }
  ,
  navLink :{
    fontSize: '1.1rem',
    color: '#fff',
    textDecoration: 'none !important',
    padding: '0.4rem 0.7rem !important',
    backgroundColor: '#000',
    cursor: 'pointer',
  },
  activeLink : {
    backgroundColor: '#fff !important',
    color: '#000', 
  },

  index: {
    background: '#000',
    color: '#fff',
    padding: '4px 10px',
  },
  activeIndex : {
    background: '#fff',
    color: '#000',
    padding: '4px 10px',
  },

});
