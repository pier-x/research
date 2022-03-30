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
  research: "Core Knowledge",
  network: "Network & Policy Engagement",
  policy: "Policy Input /Advocacy"
}
const numLayers = Object.keys(layersDef).length
const minViolinWidth = 2
const maxViolinNum = 10

const orgValues = {
  intl: 3,
  thai: 2,
  bot: 1,
}

const data = {
  macro: {
    label: "Macroeconomy",
    projects: [
      {
        title: "Inflation Dynamics",
        layers: {
          research: [
            {name: "พิม", org: "ฝนง.", type: "bot"},
            {name: "ทศพล", org: "ฝนง.", type: "bot"},
            {name: "วีริศ", org: "ฝตง.", type: "bot"},
          ],
          network: [
            {org: "ฝนง.", type: "bot"},
            {org: "ฝศม.", type: "bot"},
            {org: "ฝคส.", type: "bot"},
          ],
          policy: [
            {org: "กนง.", type: "bot"},
          ],
        },
      },
      {
        title: "Monetary Policy Transmissions",
        layers: {
          policy: [
            {org: "กนง.", type: "bot"},
          ],
          network: [
            {org: "ฝนง.", type: "bot"},
            {org: "ฝศม.", type: "bot"},
            {org: "ฝคส.", type: "bot"},
          ],
        }
      },
      {
        title: "Exchange Rate and Financial Markets",
        layers: {
          research: [
            {name: "พิม", org: "ฝนง.", type: "bot"},
            {name: "เจตวัฒน์", org: "ฝนง.", type: "bot"},
          ],
          network: [
            {org: "CMRI", type: "thai"},
          ],
          policy: [
            {org: "กนง.", type: "bot"},
          ],
        }
      },
      {
        title: "Financial Stability",
        layers: {
          research: [
            {name: "Tsomocos", org: "SAID", type: "intl"},
            {name: "พงศ์พิชย์", org: "ฝนง.", type: "bot"},
            {name: "วรินทิพย์", org: "ฝนง.", type: "bot"},
          ],
          policy: [
            {org: "กนง.", type: "bot"},
          ],
        }
      },
    ],
  },
  labor: {
    label: "Labor Market & Human Capital",
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
            {org: "สภาพัฒนฯ", type: "thai"},
          ],
        }
      },
      {
        title: "Labor Market",
        subtitle: "Landscape and trends",
        layers: {
          research: [
            {name: "ศุภนิจ", org: "UCL", type: "intl"},
            {name: "เนื้อแพร", org: "UC3M", type: "intl"},
          ],
          network: [
            {org: "ประกันสังคม", type: "thai"},
            {org: "สกสว.", type: "thai"},
            {org: "ฝขอ.", type: "bot"},
            {org: "ฝคส.", type: "bot"},
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
            {org: "สศค.", type: "thai"},
            {org: "ฝขอ.", type: "bot"},
          ],
          policy: [
            {org: "อนุฯ เบี้ยยังชีพผู้สูงอายุ", type: "thai"},
            {org: "คณะกรรมการกฤษฎีกา", type: "thai"},
            {org: "สภาพัฒนฯ", type: "thai"},
            {org: "Op-Ed", type: "bot"},
          ],
        },
      },
    ],
  },
  agribiz: {
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
          network: [
            {org: "สสว.", type: "thai"},
            {org: "วช.", type: "thai"},
            {org: "สรรพากร", type: "thai"},
          ],
        },
      },
      {
        title: "Productivity & Competition",
        layers: {
          research: [
            {name: "ชานนทร์", org: "Analysis Group", type: "intl"},
            {name: "สันติธาร", org: "Sea Limited", type: "intl"},
            {name: "รุ่งเกียรติ", org: "CU", type: "thai"},
            {name: "อนุสรา", org: "ฝคศ.", type: "bot"},
            {name: "ทศพล", org: "ฝนง.", type: "bot"},
            {name: "ธนพร", org: "ฝคศ.", type: "bot"},
          ],
          network: [
            {org: "กขค.", type: "thai"},
          ]
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
            {org: "Munich Re", type: "intl"},
            {org: "GISTDA", type: "thai"},
            {org: "DEPA", type: "thai"},
            {org: "ไทยคม", type: "thai"},
            {org: "ARV", type: "thai"},
            {org: "Infuse", type: "thai"},
          ],
          policy: [
            {org: "กระทรวงเกษตรฯ", type: "thai"},
            {org: "สมาคมประกันวินาศภัย", type: "thai"},
            {org: "ธกส.", type: "thai"},
          ],
        }
      },
      {
        title: "Firm Behavior",
        layers: {
          research: [
            {name: "ศิรดา", org: "ฝกง.", type: "bot"},
            {name: "อารยา", org: "ฝกง.", type: "bot"},
          ],
        },
      },
    ],
  },
  households: {
    label: "Households",
    projects: [
      {
        title: "Household Debt",
        layers: {
          research: [
            {name: "Naoyuki", org: "FSA", type: "intl"},
            {name: "สรา", org: "ฝนง.", type: "bot"},
            {name: "ธาราทิพย์", org: "ฝนง.", type: "bot"},
            {name: "พสิษฐ์", org: "ฝนง.", type: "bot"},
            {name: "บดินทร์", org: "ฝขอ.", type: "bot"},
            {name: "วุฒิชัย", org: "ฝขอ.", type: "bot"},
            {name: "สิกขวิชญ์", org: "ฝถร.", type: "bot"},
            {name: "สุกฤตา", org: "ฝถร.", type: "bot"},
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
          policy: [
            {org: "คณะที่ปรึกษารองนายกฯ", type: "thai"},
            {org: "คณะกรรมาธิการการเงินการคลัง", type: "thai"},
          ],
        },
      },
      {
        title: "Inclusive Finance",
        layers: {
          research: [
            {name: "ชญานี", org: "TU", type: "thai"},
            {name: "นราพงศ์", org: "CU", type: "thai"},
            {org: "DPA", type: "thai"},
          ],
          network: [
            {org: "สนภ.", type: "bot"},
            {org: "กยอ.", type: "bot"},
          ],
        }
      },
      {
        title: "Farmer's Debt Solution",
        layers: {
          research: [
            {name: "ชญานี", org: "TU", type: "thai"},
            {name: "ขนิษฐา", org: "CU", type: "thai"},
            {name: "ภูมิสิทธิ์", org: "KU", type: "thai"},
            {name: "โสภิณ", org: "PSU", type: "thai"},
          ],
          network: [
            {org: "ธกส.", type: "thai"},
            {org: "สภาเกษตรกร", type: "thai"},
            {org: "ฝกฉ.", type: "bot"},
            {org: "ฝคง.", type: "bot"},
            {org: "ฝสร.", type: "bot"},
            {org: "ฝคศ.", type: "bot"},
            {org: "สนภ.", type: "bot"},
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
            {org: "บพท.", type: "thai"},
          ],
        },
      },
    ],
  },
  others: {
    label: "Green Economy, Digital Economy, and Others",
    projects: [
      {
        title: "Climate Change Synthesis",
        layers: {
          research: [
            {name: "ปัญจพัฒน์", org: "ฝคศ.", type: "bot"},
            {name: "ธิติ", org: "ฝคศ.", type: "bot"},
          ],
          network: [
            {name: "ฝกส.", type: "bot"},
          ],
        },
      },
      {
        title: "Macroeconomic Effects of Climate Change",
        layers: {
          research: [
            {name: "พิม", org: "ฝนง.", type: "bot"},
          ],
          network: [
            {name: "BIS", type: "intl"},
          ],
        },
      },
      {
        title: "Microeconomic Effects of Climate Change",
        layers: {
          research: [
            {name: "จิรสรณ์", org: "RU", type: "thai"},
            {name: "อัศมน", org: "DEQP", type: "thai"},
          ],
        },
      },
      {
        title: "Digital",
        layers: {
          research: [
            {name: "คณิสร์", org: "CU", type: "thai"},
            {org: "ฝนง.", type: "bot"},
            {org: "ฝตง.", type: "bot"},
          ],
          network: [
            {org: "กยอ.", type: "bot"},
            {org: "ฝนง.", type: "bot"},
            {org: "ฝตง.", type: "bot"},
            {org: "DA Taskforce", type: "bot"},
            {org: "Financial Landscape Squad", type: "bot"},
          ],
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
          <div className="layer-heading" key={i} style={{gridRow: `${i+1} / span 1`, gridColumn: "1 / span 1"}}>{layersDef[layer]}</div>
        )}
        <div className="layer-heading legend-container" style={{gridRow: `${numLayers+1} / span 1`, gridColumn: "1 / span 1"}}>
          <div className="legend item item-intl">องค์กรต่างประเทศ</div>
          <div className="legend item item-thai">องค์กรในประเทศ</div>
          <div className="legend item item-bot">ฝ่ายงานใน ธปท.</div>
        </div>

        {cluster !== "overall"
        ? data[cluster].projects.map((project, i) => {
            const {title, subtitle, layers} = project
            return(
              <div className="project" key={i}>
                <LayerSet layers={layers} col={i+2} />
                <div className="cell center project-name" style={{gridRow: `${numLayers+1} / span 1`, gridColumn: `${i+2} / span 1`}}>
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
            const violinWidths = Object.keys(layersDef).map(key => layers[key].length).reverse().map(x => (Math.min(x, maxViolinNum)*(100 - minViolinWidth)/(100/maxViolinNum) + minViolinWidth))
            let pathDef = "M 0 0 "
            pathDef += `h ${violinWidths[0]} `
            pathDef += `v 50 `
            const x = 50
            for (let i = 1; i < violinWidths.length; i++) {
              pathDef += `C ${violinWidths[i-1]} ${100*i-50+x}, ${violinWidths[i]} ${100*i+50-x}, ${violinWidths[i]} ${100*i + 50} `
            }
            pathDef += `v 50 `
            pathDef += `H 0 `
            pathDef += `z`
            return(
              <div className="project" key={i}>
                <div className="violin-container" style={{gridArea: `1 / ${i+2} / span ${numLayers} / span 1`}}>
                  <svg className="violin" viewBox={`0 0 100 ${100*numLayers}`}>
                    <path d={pathDef} />
                  </svg>
                  <svg className="violin violin-flip" viewBox={`0 0 100 ${100*numLayers}`}>
                    <path d={pathDef} />
                  </svg>
                </div>
                <LayerSet layers={layers} col={i+2} />
                <div className="cell center project-name cluster" onClick={() => setValue(i+1)} style={{gridRow: `${numLayers+1} / span 1`, gridColumn: `${i+2} / span 1`}}>
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
