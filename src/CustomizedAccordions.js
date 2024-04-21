import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CustomizedTables from './CustomizedTables';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
 
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem',color: 'white',backgroundColor:"#751aff",borderRadius:"22px"}} />}
    {...props}
  />


))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'white',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({data}) {
    const [expanded, setExpanded] = React.useState([]);
  
    const newAsset = data.reduce((acc, value) => {
      const assetCls = value.asset_class;
      if (!acc[assetCls]) {
        acc[assetCls] = [];
      }
      acc[assetCls].push(value);
      // console.log(acc)
      return acc;
    }, {});
  
    const handleChange = (panel) => (event, newExpnd) => {
      setExpanded((prev) => {
        if (newExpnd) {
          return [...prev, panel];
        } else {
          return prev.filter((item) => item !== panel);
        }
      });
    };
  
    return (
      <div>
        {Object.entries(newAsset).map(([assetCls, datas]) => (
          <Accordion
            key={assetCls} 
            expanded={expanded.includes(assetCls)} 
            onChange={handleChange(assetCls)}
           
          >
            <AccordionSummary  aria-controls={`${assetCls}-content`} id={`${assetCls}-header`}>
              <Typography sx={{ fontWeight: 'bold' }}>{assetCls} ({datas.length})</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CustomizedTables rows={datas}/>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  }
  


