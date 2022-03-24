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
  research: "Research Collaboration",
  network: "Network & Policy Engagement",
  policy: "Policy Advocacy",
}

const orgValues = {
  intl: 3,
  thai: 2,
  bot: 1,
}

const data = {
  monetary: {
    label: "Money, Macro, and Finance",
    projects: [
      {
        title: "Inflation Dynamics",
        layers: {
          // data: [
          //   {name: "Online supermarket prices", type: "none"},
          //   {name: "Online good prices from Priceza", type: "none"},
          // ],
          research: [
            {name: "พิม", org: "สนง.", type: "bot"},
            {name: "ทศพล", org: "สนง.", type: "bot"},
            {name: "วีริศ", org: "ฝตง.", type: "bot"},
          ],
          network: [],
          policy: [
            {org: "กนง.", type: "bot"},
            {org: "สนง.", type: "bot"},
          ],
        },
      },
      {
        title: "Monetary Policy Transmissions",
        layers: {
          policy: [
            {org: "กนง.", type: "bot"},
            {org: "สนง.", type: "bot"},
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
            {org: "กนง.", type: "bot"},
            {org: "สนง.", type: "bot"},
          ],
        }
      },
      {
        title: "Financial Stability",
        layers: {
          // data: [
          //   {name: "Debt securities holding database", type: "none"},
          // ],
          research: [
            {name: "Tsomocos", org: "SAID", type: "intl"},
            {name: "พงศ์พิชย์", org: "สนง.", type: "bot"},
            {name: "วรินทิพย์", org: "สนง.", type: "bot"},
          ],
          policy: [
            {org: "กนง.", type: "bot"},
            {org: "สนง.", type: "bot"},
          ],
        }
      },
    ],
  },
  labor: {
    label: "Labor Market and Human Capital",
    projects: [
      {
        title: "Education",
        subtitle: "Push for evidence-based policy",
        layers: {
          research: [
            {name: "Hawley", org: "OSU", type: "intl"},
            {name: "วีระชาติ", org: "RIPED", type: "thai"},
          ],
          network: [
            {org: "J-PAL (SEA)", type: "intl"},
            {org: "EEF", type: "thai"},
            {org: "RIPED", type: "thai"},
          ],
          policy: [
            {org: "สภาพัฒน์", type: "thai"},
          ],
        }
      },
      {
        title: "Labor Market",
        subtitle: "Landscape and trends",
        layers: {
          // data: [
          //   {name: "LFS", type: "none"},
          //   {name: "Social security", type: "none"},
          //   {name: "Job ads", type: "none"},
          // ],
          research: [
            {name: "ศุภนิจ", org: "UCL", type: "intl"},
            {name: "เนื้อแพร", org: "UC3M", type: "intl"},
          ],
          network: [
            {org: "ประกันสังคม", type: "thai"},
            {org: "DA", type: "bot"},
            {org: "สนง.", type: "bot"},
          ],
          policy: [],
        },
      },
      {
        title: "Pension",
        subtitle: "Old-age income support schemes",
        layers: {
          research: [
            {name: "พรพจน์", org: "GRIPS", type: "intl"},
            {name: "วรเวศม์", org: "CU", type: "thai"},
          ],
          network: [
            {org: "ILO", type: "intl"},
            {org: "World Bank", type: "intl"},
            {org: "สภาพัฒน์", type: "thai"},
            {org: "สศค.", type: "thai"},
            {org: "DA", type: "bot"},
          ],
          policy: [
            {org: "อนุฯ เบี้ยยังชีพผู้สูงอายุ", type: "thai"},
            {org: "เศรษฐศาสตร์เข้าท่า", type: "bot"},
          ],
        },
      },
    ],
  },
  firms: {
    label: "Agriculture & Business Sectors",
    projects: [
      {
        title: "SMEs",
        layers: {
          research: [
            {name: "ชานนทร์", org: "Analysis Group", type: "intl"},
            {name: "อธิภัทร", org: "CU", type: "thai"},
            {org: "LINE MAN Wongnai", type: "thai"},
          ],
          policy: [
            {org: "สสว.", type: "thai"},
          ],
        },
      },
      {
        title: "Productivity",
        layers: {
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
            {org: "กขค.", type: "thai"},
          ],
        },
      },
      {
        title: "Crop Insurance",
        layers: {
          research: [
            {name: "Teerasit", org: "KU", type: "thai"},
            {name: "Teerayut", org: "TU", type: "thai"},
            {name: "Surapap", org: "ฝขอ.", type: "bot"},
            {name: "Apithai", org: "ฝขอ.", type: "bot"},
          ],
          network: [
            {org: "กระทรวงเกษตรฯ", type: "thai"},
            {org: "ธกส.", type: "thai"},
            {org: "สมาคมประกันวินาศภัย", type: "thai"},
            {org: "GISTDA", type: "thai"},
            {org: "DEPA", type: "thai"},
          ],
          policy: [
            {org: "กระทรวงเกษตรฯ", type: "thai"},
            {org: "สมาคมประกันวินาศภัย", type: "thai"},
          ],
        }
      },
    ],
  },
  hhagri: {
    label: "Households",
    projects: [
      {
        title: "Household Debt",
        layers: {
          // data: [
          //   {name: "Monthly NCB data", type: "none"},
          // ],
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
            {org: "NCB", type: "thai"},
            {org: "ฝถร.", type: "bot"},
            {org: "ฝคง.", type: "bot"},
            {org: "ฝกส.", type: "bot"},
            {org: "ฝนส.", type: "bot"},
            {org: "ฝนฉ.", type: "bot"},
            {org: "กยอ.", type: "bot"},
          ],
        },
      },
      {
        title: "Inclusive Finance",
        layers: {
          research: [
            {name: "Chayanee", org: "TU", type: "thai"},
            {name: "Narapong", org: "CU", type: "thai"},
            {org: "DPA", type: "thai"},
          ],
          network: [
            {org: "สนภ?", type: "bot"},
            {org: "กยอ.", type: "bot"},
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
          // data: [
          //   {name: "BAAC loan data", type: "none"},
          //   {name: "PIER farmer survey", type: "none"},
          //   {name: "LED data", type: "none"},
          //   {name: "Big agriculture data", type: "none"},
          // ],
          research: [
            {name: "Chayanee", org: "TU", type: "thai"},
            {name: "Kanittha", org: "CU", type: "thai"},
            {name: "Phumsith", org: "KU", type: "thai"},
            {name: "Sopin", org: "PSU", type: "thai"},
          ],
          network: [
            {org: "ธกส.", type: "thai"},
            {org: "สภาเกษตรกร", type: "thai"},
            {org: "ฝกฉ.", type: "bot"},
            {org: "ฝคง.", type: "bot"},
            {org: "ฝสร.", type: "bot"},
            {org: "ฝคศ.", type: "bot"},
            {org: "สนภ?", type: "bot"},
          ],
        },
      },
      {
        title: "Poverty Alleviation",
        layers: {
          research: [
            {org: "ทีมวิจัยภายใต้โครงการแก้ปัญหาความยากจนอย่างเบ็ดเสร็จและแม่นยำ", type: "thai"},
          ],
          network: [
            {org: "บพท.", type: "bot"},
          ],
        },
      },
    ],
  },
  green: {
    label: "Green Economy, Digital Economy, and Others",
    projects: [
      {
        title: "PIERspectives",
        subtitle: "An economist's guide to climate change",
        layers: {
          research: [
            {org: "MPG", type: "bot"},
          ],
          network: [],
          policy: [],
        }
      },
      {
        title: "Effects",
        subtitle: "The macroeconomic effects of climate change in Thailand and implications for central banks",
        layers: {
          research: [
            {name: "พิม", org: "สนง.", type: "bot"},
          ],
          network: [
            {org: "BIS", type: "intl"},
          ],
          policy: [],
        },
      },
      {
        title: "Effects",
        subtitle: "Climate change and effects on firms and households",
        layers: {
          research: [
            {name: "จิรสรณ์", org: "RU", type: "thai"},
            {name: "อัศมน", org: "DEQP", type: "thai"},
          ],
          network: [],
          policy: [],
        },
      },
      // {
      //   title: null,
      //   subtitle: "Impact evaluation of adaptation finance products and incentive design",
      //   layers: {
      //     data: [
      //       {name: "Review", type: "none"},
      //       {name: "On-site survey", type: "none"},
      //     ],
      //     research: [
      //       {name: "สภน.", org: null, type: "bot"},
      //     ],
      //     network: [],
      //     policy: [],
      //   },
      // },
    ],
  },  
}

function getViolinData(clusterProjects) {
  const x = {}
  Object.keys(layersDef).forEach(key => {
    x[key] = {}
  })
  const clusterCopy = JSON.parse(JSON.stringify(clusterProjects))
  clusterCopy.forEach(project => {
    Object.keys(layersDef).forEach(key => {
      if (project.layers[key]) {
        project.layers[key].forEach(item => {
          if ('name' in item) {
            delete item.name
          }
          const tmp = JSON.stringify(item)
          if (tmp in x[key]) {
            x[key][tmp] += 1
          }
          else {
            x[key][tmp] = 1
          }
        })
      }
    })
  })
  return x
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

function Canvas({ cluster, value, index, setValue }) {

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
        {layerKeys.map((layer, i) => 
          <div className="layer-heading" key={i} style={{gridRow: `${i} / span 1`, gridColumn: "1 / span 1"}}>{layersDef[layer]}</div>
        )}
        <div />

        {cluster !== "overall"
        ? data[cluster].projects.map((project, i) => {
            const {title, subtitle, layers} = project
            return(
              <div className="project" key={i}>
                <LayerSet layers={layers} col={i+2} />
                <div className="cell center project-name">
                  <div className="title">{title}</div>
                  {subtitle && <div className="subtitle">{subtitle}</div>}
                </div>
              </div>
            )
          })
        : Object.keys(data).map((cluster, i) => {
            const layers = getViolinData(data[cluster].projects)
            Object.keys(layers).forEach(layer => {
              const tmp = layers[layer]
              layers[layer] = []
              Object.keys(tmp).forEach(key => {
                const curItem = JSON.parse(key)
                curItem['value'] = tmp[key]
                layers[layer].push(curItem)
              })
            })
            return(
              <div className="project" key={i}>
                {/* <div className="violin-container" style={{gridArea: `1 / ${i+2} / span 3 / span 1`}}>
                  <svg className="violin" viewBox="0 0 100 100">
                    <path d="M 0, 0 h 100 v 100 z" fill="red" />
                  </svg>
                </div> */}
                <LayerSet layers={layers} col={i+2} />
                <div className="cell center project-name cluster" onClick={() => setValue(i+1)}>
                  <div className="title">{data[cluster].label}</div>
                </div>
              </div>
            )
          })
        }

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

function Layer({ data, lineType, row, col }) {
  return(
    <div className="cell" style={{gridRow: `${row+1} / span 1`, gridColumn: `${col} / span 1`}}>
      <div className={`line line-${lineType === "all" ? "all" : "none"}`} />
      {data && data.length > 0 &&
        <div className="layer-container">
          {data.sort((a, b) => orgValues[b.type] - orgValues[a.type]).map((item, i) => 
            <div className={`item item-${item.type}`} key={i}>
              {item.name
              ? `${item.name}${item.org ? ` (${item.org})` : ""}`
              : item.org
              }
            </div>
          )}
        </div>
      }
      <div className={`line line-${lineType}`} />
    </div>
  )
}

function LayerSet({ layers, col }) {
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
    r.push(<Layer data={layers[layerKeys[i]]} lineType={lineType} key={i} row={i} col={col} />)
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
        <Tabs value={value} onChange={handleChange} centered={largeScreen} variant={largeScreen ? "standard" : "scrollable"} scrollButtons="auto">
          <Tab label="Overview" />
          {Object.keys(data).map(key =>
            <Tab label={data[key].label} key={key} />  
          )}
        </Tabs>
      </Box>
      <Canvas value={value} index={0} cluster={"overall"} setValue={setValue} />
      {Object.keys(data).map((key, i) =>
        <Canvas value={value} index={i+1} cluster={key} key={key}/>
      )}
    </ThemeProvider>
  );
}

export default App;
