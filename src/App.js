import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

import styles from './css/styles.scss';
import './css/styles.scss';

const layersDef = {
  data: "Data/Methodology",
  research: "Research Collaboration",
  network: "Network & Policy Engagement",
  policy: "Policy Advocacy",
}

const data = {
  labor: {
    label: "Labor and Human Capital",
    projects: [
      {
        title: "Education",
        subtitle: "Push for evidence-based policy",
        layers: {
          data: [
            {name: "Review lessons learned from other countries", type: "none"},
          ],
          research: [
            {name: "Hawley", org: "OSU", type: "intl"},
            {name: "วีระชาติ", org: "RIPED", type: "thai"},
          ],
          network: [
            {name: "J-PAL (SEA)", type: "intl"},
            {name: "EEF", type: "thai"},
            {name: "RIPED", type: "thai"},
          ],
          policy: [
            {name: "สภาพัฒน์", type: "thai"},
          ],
        }
      },
      {
        title: "Labor Market",
        subtitle: "Landscape and trends",
        layers: {
          data: [
            {name: "LFS", type: "none"},
            {name: "Social security", type: "none"},
            {name: "Job ads", type: "none"},
          ],
          research: [
            {name: "ศุภนิจ", org: "UCL", type: "intl"},
            {name: "เนื้อแพร", org: "UC3M", type: "intl"},
          ],
          network: [
            {name: "ประกันสังคม", type: "thai"},
            {name: "DA", type: "bot"},
            {name: "สนง.", type: "bot"},
          ],
          policy: [],
        }
      },
      {
        title: "Pension",
        subtitle: "Old-age income support schemes",
        layers: {
          data: [
            {name: "OLG model", type: "none"},
            {name: "SES", type: "none"},
            {name: "LFS", type: "none"},
            {name: "Social security", type: "none"},
            {name: "Gov budget", type: "none"},
          ],
          research: [
            {name: "พรพจน์", org: "GRIPS", type: "intl"},
            {name: "วรเวศม์", org: "CU", type: "thai"},
          ],
          network: [
            {name: "ILO", type: "intl"},
            {name: "World Bank", type: "intl"},
            {name: "สภาพัฒน์", type: "thai"},
            {name: "สศค.", type: "thai"},
            {name: "DA", type: "bot"},
          ],
          policy: [
            {name: "อนุฯ เบี้ยยังชีพผู้สูงอายุ", type: "thai"},
            {name: "เศรษฐศาสตร์เข้าท่า", type: "bot"},
          ],
        }
      }
    ],
  },
  green: {
    label: "Green Economy",
    projects: [
      {
        title: "PIERspectives",
        subtitle: "Comprehensive understanding",
        layers: {
          data: [
            {name: "Synthesis of climate research and Thailand's policies/actions", type: "none"},
          ],
          research: [
            {name: "MPG", org: null, type: "bot"},
          ],
          network: [],
          policy: [],
        }
      },
      {
        title: null,
        subtitle: "The macroeconomic effects of climate change in Thailand and implications for central banks",
        layers: {
          data: [
            {name: "SPEI", type: "none"},
            {name: "Macro", type: "none"},
          ],
          research: [
            {name: "พิม", org: "สนง.", type: "bot"},
          ],
          network: [
            {name: "BIS", type: "intl"},
          ],
          policy: [],
        },
      },
      {
        title: "Vulnerability",
        subtitle: "Understanding firms and households vulnerability to climate change",
        layers: {
          data: [
            {name: "CPSS", type: "none"},
            {name: "SES", type: "none"},
            {name: "Climate grid data", type: "none"},
          ],
          research: [
            {name: "จิรสรณ์", org: "RU", type: "thai"},
            {name: "อัศมน", org: "DEQP", type: "thai"},
          ],
          network: [],
          policy: [],
        },
      },
      {
        title: null,
        subtitle: "Impact evaluation of adaptation finance products and incentive design",
        layers: {
          data: [
            {name: "Review", type: "none"},
            {name: "On-site survey", type: "none"},
          ],
          research: [
            {name: "สภน.", org: null, type: "bot"},
          ],
          network: [],
          policy: [],
        },
      },
    ],
  },
  monetary: {
    label: "Monetary Policy",
    projects: [
      {
        title: "Inflation Dynamics",
        layers: {
          data: [
            {name: "Online supermarket prices", type: "none"},
            {name: "Online good prices from Priceza", type: "none"},
          ],
          research: [
            {name: "พิม", org: "สนง.", type: "bot"},
            {name: "ทศพล", org: "สนง.", type: "bot"},
            {name: "วีริศ", org: "ฝตง.", type: "bot"},
          ],
          network: [],
          policy: [
            {name: "กนง.", type: "bot"},
            {name: "สนง.", type: "bot"},
          ],
        },
      },
      {
        title: "Monetary Policy Transmissions",
        layers: {
          policy: [
            {name: "กนง.", type: "bot"},
            {name: "สนง.", type: "bot"},
          ]
        }
      },
      {
        title: "Exchange Rate and Financial Markets",
        layers: {
          data: [
            {name: "Transaction-level customs data", type: "none"},
          ],
          research: [
            {name: "พิม", org: "สนง.", type: "bot"},
            {name: "เจตวัฒน์", org: "ฝบง.", type: "bot"},
          ],
          policy: [
            {name: "กนง.", type: "bot"},
            {name: "สนง.", type: "bot"},
          ],
        }
      },
      {
        title: "Financial Stability",
        layers: {
          data: [
            {name: "Debt securities holding database", type: "none"},
          ],
          research: [
            {name: "Tsomocos", org: "SAID", type: "intl"},
            {name: "พงศ์พิชย์", org: "สนง.", type: "bot"},
            {name: "วรินทิพย์", org: "สนง.", type: "bot"},
          ],
          policy: [
            {name: "กนง.", type: "bot"},
            {name: "สนง.", type: "bot"},
          ],
        }
      },
    ],
  },
  hhagri: {
    label: "Household and Agriculture",
    projects: [
      {
        title: "Household Debt",
        layers: {
          data: [
            {name: "Monthly NCB data", type: "none"},
          ],
          research: [
            {name: "Naoyuki", org: "FSA", type: "intl"},
            {name: "สรา", org: "ฝนง.", type: "bot"},
            {name: "ธาราทิพย์", org: "ฝนง.", type: "bot"},
            {name: "พสิษฐ์", org: "ฝนง.", type: "bot"},
            {name: "บดินทร์", org: "ฝขอ.", type: "bot"},
            {name: "วุฒิชัย", org: "ฝขอ.", type: "bot"},
            {name: "สิกขวิชญ์", org: "ฝถร.", type: "bot"},
            {name: "Sukitta", org: "ฝถร.", type: "bot"},
          ],
          network: [
            {name: "NCB", type: "thai"},
            {name: "ฝถร.", type: "bot"},
            {name: "ฝคง.", type: "bot"},
            {name: "ฝกส.", type: "bot"},
            {name: "ฝนส.", type: "bot"},
            {name: "ฝนฉ.", type: "bot"},
            {name: "กยอ.", type: "bot"},
          ],
        },
      },
      {
        title: "Crop Insurance",
        layers: {
          data: [
            {name: "Big agriculture data", type: "none"},
            {name: "Satellite and climate data", type: "none"},
          ],
          research: [
            {name: "Teerasit", org: "KU", type: "thai"},
            {name: "Teerayut", org: "TU", type: "thai"},
            {name: "Surapap", org: "ฝขอ.", type: "bot"},
            {name: "Apithai", org: "ฝขอ.", type: "bot"},
          ],
          network: [
            {name: "กระทรวงเกษตรฯ", type: "thai"},
            {name: "ธกส.", type: "thai"},
            {name: "สมาคมประกันวินาศภัย", type: "thai"},
            {name: "GISTDA", type: "thai"},
            {name: "DEPA", type: "thai"},
          ],
          policy: [
            {name: "กระทรวงเกษตรฯ", type: "thai"},
            {name: "สมาคมประกันวินาศภัย", type: "thai"},
          ],
        }
      },
      {
        title: "Inclusive Finance",
        layers: {
          data: [
            {name: "DPA data", type: "none"},
            {name: "FN service locations", type: "none"},
          ],
          research: [
            {name: "Chayanee", org: "TU", type: "thai"},
            {name: "Narapong", org: "CU", type: "thai"},
            {name: "DPA", org: null, type: "thai"},
          ],
          network: [
            {name: "สนภ?", type: "bot"},
            {name: "กยอ.", type: "bot"},
          ],
        }
      },
      {
        title: "Lottery",
        layers: {
          research: [
            {name: "Natt", org: "BC's Office of HRC", type: "intl"},
          ],
        },
      },
      {
        title: "Farmer's Debt Solution",
        layers: {
          data: [
            {name: "BAAC loan data", type: "none"},
            {name: "PIER farmer survey", type: "none"},
            {name: "LED data", type: "none"},
            {name: "Big agriculture data", type: "none"},
          ],
          research: [
            {name: "Chayanee", org: "TU", type: "thai"},
            {name: "Kanittha", org: "CU", type: "thai"},
            {name: "Phumsith", org: "KU", type: "thai"},
            {name: "Sopin", org: "PSU", type: "thai"},
          ],
          network: [
            {name: "ธกส.", type: "thai"},
            {name: "สภาเกษตรกร", type: "thai"},
            {name: "ฝกฉ.", type: "bot"},
            {name: "ฝคง.", type: "bot"},
            {name: "ฝสร.", type: "bot"},
            {name: "ฝคศ.", type: "bot"},
            {name: "สนภ?", type: "bot"},
          ],
        },
      },
      {
        title: "Poverty Alleviation",
        layers: {
          data: [
            {name: "Big poverty and local enterprises data from 20 poorest provinces", type: "none"},
          ],
          research: [
            {name: "ทีมวิจัยภายใต้โครงการแก้ปัญหาความยากจนอย่างเบ็ดเสร็จและแม่นยำ", org: null, type: "thai"},
          ],
          network: [
            {name: "บพท.", type: "bot"},
          ],
        },
      },
    ],
  },
  firms: {
    label: "SME & Corporate Sector",
    projects: [
      {
        title: "SMEs",
        layers: {
          data: [
            {name: "ข้อมูล LINE MAN Wongnai", type: "none"},
          ],
          research: [
            {name: "ชานนทร์", org: "Analysis Group", type: "intl"},
            {name: "อธิภัทร", org: "CU", type: "thai"},
            {name: "LINE MAN Wongnai", type: "thai"},
          ],
          policy: [
            {name: "สสว.", type: "thai"},
          ],
        },
      },
      {
        title: "Productivity",
        layers: {
          data: [
            {name: "สำมะโนอุตสาหกรรม (ข้อมูลนับจด)", type: "none"},
          ],
          research: [
            {name: "อนุสรา", org: "ฝคศ.", type: "bot"},
          ],
        }
      },
      {
        title: "Competition",
        layers: {
          research: [
            {name: "ชานนทร์", org: "Analysis Group", type: "intl"},
            {name: "ทศพล", org: "ฝนง.", type: "bot"},
            {name: "ธนพร", org: "ฝคศ.", type: "bot"},
          ],
          network: [
            {name: "กขค.", type: "thai"},
          ],
        },
      }
    ],
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: styles.primaryColor,
    },
    secondary: {
      main: styles.secondaryColor,
    },
  },
  typography: {
    fontFamily: "Dindan",
  },
});

function Canvas({ cluster, value, index }) {

  const [showArrow, setShowArrow] = React.useState(false)
  const layerKeys = Object.keys(layersDef).reverse()
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (ref.current)
      if (window.innerWidth < ref.current.offsetWidth) {
        setShowArrow(true)
      }
      else {
        setShowArrow(false)
      }
  }, [value])

  if (value !== index)
    return null

  return(
    <div className="canvas-container">
      <div
        className="canvas"
        role="tabpanel"
        hidden={value !== index}
        ref={ref}
      >

        {/* Heading */}
        {layerKeys.map(layer => 
          <div className="layer-heading">{layersDef[layer]}</div>
        )}
        <div />

        {data[cluster].projects.map(project => {
          const {title, subtitle, layers} = project
          return(
            <div className="project">
              <LayerSet layers={layers} />
              <div className="cell center project-name">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
              </div>
            </div>
          )
        })}

      </div>
      <ArrowForwardIosIcon
        sx={{
          position: "fixed",
          right: "20px",
          top: "68px",
          display: showArrow ? "inline-flex" : "none",
          zIndex: 999,
          color: "lightgrey",
        }}
      />
    </div>
  )
}

function Layer({ data, lineType }) {
  return(
    <div className="cell">
      <div className={`line line-${lineType}`} />
      {data && data.length > 0 &&
        <div className="layer-container">
          {data.map(item => 
            <div className={`item item-${item.type}`}>{item.name}{item.org && ` (${item.org})`}</div>
          )}
        </div>
      }
    </div>
  )
}

function LayerSet({layers}) {
  const layerKeys = Object.keys(layersDef).reverse()
  let started = false
  let lineType = 'none'
  let r = []
  for (let i = 0; i < layerKeys.length; i ++) {
    if (started) {
      lineType = 'all'
    }
    else {
      if (layers[layerKeys[i]] && layers[layerKeys[i]].length > 0) {
        lineType = 'bottom'
        started = true
      }  
    }
    r.push(<Layer data={layers[layerKeys[i]]} lineType={lineType} />)
  }
  return r
}

function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered variant={largeScreen ? "standard" : "scrollable"} scrollButtons="auto">
          {Object.keys(data).map(key =>
            <Tab label={data[key].label} />  
          )}
        </Tabs>
      </Box>
      {Object.keys(data).map((key, i) =>
        <Canvas value={value} index={i} cluster={key} />
      )}
    </ThemeProvider>
  );
}

export default App;
