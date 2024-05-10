var config = {
    style: 'mapbox://styles/jackjin20/clt50hdpd00cd01radrwqdct0',
    accessToken: 'pk.eyJ1IjoiamFja2ppbjIwIiwiYSI6ImNscnI2dXVpdTBhdzYyaXFoNnVxOTRsZDQifQ.RKQxVe5XGmFRitCcLepVtQ',
    showMarkers: false,
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [
        {
            id: 'section-1',
            title: 'DAE unveiled Sep23 Annual Demographic Forecasts',
            description: `	
			<p>The month of March marks a pivotal time for the Economics and <b>Spatial Analytics team (ESA)</b> at Deloitte Access Economics (DAE). It's the period when we finalize our comprehensive demographic forecasts, commonly referred to as our <b>"September"</b> forecasts. This naming reflects the alignment with critical economic data timelines. </p>
			<p> Annually crafted by DAE, the September forecasts offer an in-depth look at anticipated growth in our urban landscapes. They encompass vital data on <b>population dynamics</b>, <b>employment trends</b>, <b>educational engagement</b>, <b>income brackets</b>, <b>GDP</b>, and <b>job opportunities</b>, specifically focusing on <b>Sydney</b>, <b>Melbourne</b>, and <b>Brisbane</b>. What sets this data apart is its spatial dimension—each dataset is pinpointed to a precise location, offering localized insights. </p> 
			<p> This edition delves into the latest demographics data, highlighting <u>a notable shift as trends edge closer to pre-pandemic patterns</u>, underlining the evolving dynamics of our cities.</p>
			<p> This analysis is informed by insights from Pete's newsletter: <a href="https://trafficteam.substack.com/p/our-latest-demographics-data-shows/"><b>Our latest demographics data shows continued return to pre-pandemic trends</b></a>. 
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [ 	
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }			
			],
            onChapterExit: [				
			],			
        },
        {
            id: 'section-2',
            title:'Why Demographic Data Matters for TU?',
            description: `
			<p>Demographic data plays a crucial role across various departments within TU. The traffic team, for instance, leverages this information in their <b>Strategic Transport Models (STM)</b> to project future road traffic volumes. Development teams rely on these insights for evaluating new proposals and integrating them into their financial planning. Furthermore, the <b>Executive Committee (ExCo)</b> utilizes this data to inform discussions with investors and stakeholders, providing a grounded perspective on emerging trends and themes.</p>
			<p>Here are some of the questions our demographic data helps us answer: 
			<ol>	<li> What is the pace of population growth in our key expansion areas? </li>	<li> Which industrial zones are experiencing the most rapid growth? </li>	<li> In what ways are employment categories evolving within our central business districts? </li>		<li> What is the Gross Domestic Product in specific regions of our city? </li>	<li> How is new development projects (i.e. Badgerys Creek) expected to influence local population and job growth? </li> </p>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 7,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }						
            ]
            ,
            onChapterExit: [               
            ],						
        },
        {
            id: 'section-3',
			title: 'What Insights Does the Sep23 Forecast Provide?',
            description: `
			<p>Our focus is on the comprehensive population projections for Sydney, Melbourne, and Brisbane, spanning <b>from 2021 to 2041</b>, as outlined in the annual DAE forecasts. A crucial aspect of our analysis is to compare different versions of these forecasts to identify any significant upgrades or downgrades in our city projections, which could subsequently influence our asset strategies. </p>
			<p>A prevalent inquiry pertains to the recovery trajectory post-pandemic: Are we aligning back to the pre-pandemic growth trends? To address this, we'll juxtapose the <b>Sep23</b> forecast with the <b>Sep19</b> data.</p>
			<p>Before we delve into this comparative analysis, let's first explore the <b>demographics and employment centers</b> and pinpoint the <b>primary areas of growth</b>.</p>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 9,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }			
            ]
            ,
            onChapterExit: [   				     
            ],					
        },
        {
            id: 'section-4',
            title: '2021 Sydney Population Overview',
            description: `
			<p>In 2021, Sydney's population reached <b>5.26 million</b>.</p>
			<p>The population distribution at the SA2 level within Sydney Metro in 2021 was relatively balanced. This uniformity is attributed to the <a href="https://www.abs.gov.au/census/guide-census-data/geography/census-geography-glossary#:~:text=Statistical%20Area%20Level%202%20(SA2),-Statistical%20Areas%20Level&text=They%20generally%20have%20a%20population,and%20catchments%20of%20rural%20areas">SA2 boundaries being designed to encompass populations ranging from 3,000 to 25,000</a>.</p>
			<p>For a more detailed breakdown, users are encouraged to consult the <a href="https://tableau.transurban.com/#/site/StrategyandAnalysis/workbooks/4201/views">Sep23 DAE commission forecast</a>, which offers an in-depth view of Sydney's population distribution.</p>
			<img src="assets/img/chapters/pop21.svg" width = "200"></div>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 1
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }							
			],
            onChapterExit: [],
        },
        {
            id: 'section-5',
			title: '2041 Sydney Population Forecast',
            description: 
				`
				<p>By 2041, Sydney's population is projected to reach approximately <b>6.94 million</b>.</p>
				<p>This forecast indicates significant growth particularly in Sydney's <a href="https://www.planning.nsw.gov.au/plans-for-your-area/priority-growth-areas-and-precincts/north-west-growth-area">North West</a> and <a href= "https://www.planning.nsw.gov.au/plans-for-your-area/priority-growth-areas-and-precincts/south-west-growth-area">South West</a> regions, which are identified as primary greenfield residential development areas. </p> 
				<img src="assets/img/chapters/pop41.svg" width = "200" height = "200"></div>
				<p>In terms of infill development, the focal SA2 area is "Wentworth Point - Sydney Olympic Park." This location is recognized as a crucial site for medium and high-density residential development, aligning with the state's strategic planning initiatives. </p>
				`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 1
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }							
			],
            onChapterExit: [],			
        },        
        {
            id: 'section-6',
            title: 'Sydney Population Growth Forecast 2021-2041',
            description: `
			<p>Current projections indicate that Sydney's population will increase from <b>5.26 million in 2021</b> to <b>6.94 million by 2041</b>, amounting to an influx of <b>1.68 million</b> residents over two decades. This growth signifies an enhancement of approximately <b>255,000</b> compared to the Sep22 forecast from the previous year.</p>
			<img src="assets/img/chapters/nsw_pop.svg" width = "500"></div>
			<p>Sydney's population is now nearing its pre-pandemic figures, currently at <span class="highlight"><b>97.2%</b></span> of the Sep19 total, with only a <b>200,000 difference</b>.</p>
			<img src="assets/img/chapters/pop.svg" width = "200"></div>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 1
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }							
			],
            onChapterExit: [],		       
        },
		{
            id: 'section-7',
			title: '2021 Melbourne Population Overview',
            description: `
			<p>In 2021, Melbourne's population reached <b>4.98 million</b>.</p>
			<p>The population distribution at the SA2 level within Melbourne Metro in 2021 was relatively balanced. This uniformity is attributed to the <a href="https://www.abs.gov.au/census/guide-census-data/geography/census-geography-glossary#:~:text=Statistical%20Area%20Level%202%20(SA2),-Statistical%20Areas%20Level&text=They%20generally%20have%20a%20population,and%20catchments%20of%20rural%20areas.">SA2 boundaries being designed to encompass populations ranging from 3,000 to 25,000</a>.</p>
			<p>For a more detailed breakdown, users are encouraged to consult the <a href="https://tableau.transurban.com/#/site/StrategyandAnalysis/workbooks/4201/views.">Sep23 DAE commission forecast</a>, which offers an in-depth view of Melbourne's population distribution.</p>
			<img src="assets/img/chapters/pop21.svg" width = "200" ></div>
			`,
             location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 1
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }						
            ]
            ,
            onChapterExit: [               
            ],					
        },
         {
            id: 'section-8',
			title: '2041 Melbourne Population Forecast',
            description: `
			<p>By 2041, Melbourne's population is expected to reach approximately <b>7.0 million</b>.</p>
			<p>The forecast for 2041 highlights substantial growth in <a href="https://vpa-web.s3.amazonaws.com/wp-content/uploads/2012/11/North-Growth-Corridor-Plan.pdf">North Melbourne</a> and <a href="https://vpa-web.s3.amazonaws.com/wp-content/uploads/2012/11/West-Growth-Corridor-Plan.pdf">West South </a>, areas known for extensive greenfield residential developments.</p> 
			<img src="assets/img/chapters/pop41.svg" width = "200" height = "200"></div>
			<p>Additionally, certain SA2s, such as <b>"Cranbourne South"</b> and <b>"Beaconsfield - Officer"</b> are also identified as key zones for greenfield residential growth.</p>
			`,
           location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 1
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }						
            ]
            ,
            onChapterExit: [               
            ],	   
        },
        {
            id: 'section-9',
			title: 'Melbourne Population Growth Forecast 2021-2041',
            description: `
			<p>TRecent forecasts predict Melbourne's population will expand from approximately <b>4.98m in 2021</b> to <b>7.0m by 2041</b>, an increase of <b>2.03m residents</b>.</p>
			<img src="assets/img/chapters/vic_pop.svg" width = "500"></div>
			<p>This growth marks an additional <b>267,000 residents</b> compared to last year's forecast, keeping Melbourne on course to surpass Sydney as Australia's most populous city.</p>
			<img src="assets/img/chapters/pop.svg" width = "200"></div>
			`,
            location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 1
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }						
            ]
            ,
            onChapterExit: [               
            ],         
        },
        {
            id: 'section-10',
            title: '2021 SEQ Population Overview',					
            description: `
			<p>In 2021, the population of South East Queensland (SEQ) reached <b>3.78 million</b>.</p>
			<p>The population distribution at the SA2 level within SEQ in 2021 was relatively balanced. This uniformity is attributed to the  <a href="https://www.abs.gov.au/census/guide-census-data/geography/census-geography-glossary#:~:text=Statistical%20Area%20Level%202%20(SA2),-Statistical%20Areas%20Level&text=They%20generally%20have%20a%20population,and%20catchments%20of%20rural%20areas.">SA2 boundaries being designed to encompass populations ranging from 3,000 to 25,000.</a>.</p>
			<p> For a more detailed breakdown, users are encouraged to consult the <a href="https://tableau.transurban.com/#/site/StrategyandAnalysis/workbooks/4201/views.">Sep23 DAE commission forecast</a>, which offers an in-depth view of Brisbane's population distribution.</p>
			<img src="assets/img/chapters/pop21.svg" width = "200"></div>			
			`,
			location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 1
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }			
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-11',
			title: '2041 Brisbane Population Forecast',
            description: 
			`
			<p>By 2041, the population of South East Queensland (SEQ) is expected to reach approximately <b>5.36 million</b>.</p>
			<p>The 2041 forecast highlights significant growth in specific areas: Ipswich, espetially <a href="https://www.statedevelopment.qld.gov.au/__data/assets/pdf_file/0019/12448/ripley-valley-development-scheme.pdf"> Ripley Valley</a>, Logan, especially <a href= "https://ehq-production-australia.s3.ap-southeast-2.amazonaws.com/626be8a07ab1dff7a6527537ebd4c6d9dd2269ed/documents/attachments/000/096/927/original/Draft_Park_Ridge_South_Chambers_Flat_Plan_Consultation_Booklet.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4KKNQAKIOR7VAOP4%2F20240411%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20240411T105608Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=a4b6fc4942130f0de86bd12f9daf0e4da0ec384efd3b2f531edce52b10d720b6"> Park Ridge and Chambers Flat</a>, along with <a href="https://communities.lendlease.com/contentassets/c60d7ad02f5e4358aadc17100206c06c/yar_mp_230322web_3-page.pdf"> Yarrabilba </a>, and in <a href="https://www.moretonbay.qld.gov.au/files/assets/public/v/1/services/building-development/mbrc-plan/background-studies/cabwest-structure-plan-summary.pdf"> Calboolture West</a>, which are all earmarked for extensive greenfield residential developments.</p> 
			<img src="assets/img/chapters/pop41.svg" width = "200" height = "200"></div>
			<p>Within the Brisbane Local Government Area (LGA), several SA2s such as <b>"Rochedale"</b>, <b>"Pallara - Willawong"</b> and <b>"Collingwood Park - Redbank"</b> are also projected to undergo substantial greenfield residential growth.</p>			
			`,
            location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 1
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }			
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-12',
			title: 'Brisbane Population Growth Forecast 2021-2041',
            description: `
			<p>Brisbane demonstrates the most consistent growth among major Australian cities, with minimal fluctuations in its forecasts, suggesting a resilient response to the pandemic.</p>
			<p>Current projections estimate Brisbane's population will rise from approximately <b>3.78m in 2021</b> to <b>5.36m by 2041</b>, an increase of <b>1.57m residents</b>.</p>
			<img src="assets/img/chapters/qld_pop.svg" width = "500"></div>
			<p>This growth aligns closely with previous DAE forecasts, indicating stable and predictable development trends.</p>
			<img src="assets/img/chapters/pop.svg" width = "200"></div>
			<p>For detailed information on key development hubs within South East Queensland, please refer to <a href="https://planning.statedevelopment.qld.gov.au/__data/assets/pdf_file/0019/83242/seq-regional-plan-shapingseq-update-2023-high-res.pdf"> Shaping SEQ</a> document.</p>
			`,
            location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 1
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }			
            ]
            ,
            onChapterExit: [   				     
            ],          
        },
        {
            id: 'section-13',
            title: '2021 Sydney Employment Overview',
            description: `
			<p>In 2021, Sydney's employment figures reached <b>2.72 million</b>.</p>
			<p>At the SA2 level, the job distribution across Greater Sydney in 2021 was notably uneven. For instance, "<b>Sydney <North> - Millers Point</b>" alone boasted <b>338,435 jobs</b>, representing <span class="highlight"><b>12.4%</b></span> of the city's total employment.</p>
			<img src="assets/img/chapters/emp21.svg" width = "200"></div>
			<p>Moreover, the <b>top 10</b> SA2s, which include areas like "<b>North Sydney - Lavender Bay</b>", "<b>Sydney (South) - Haymarket</b>", "<b>Macquarie Park - Marsfield</b>" and "<b>Parramatta - North</b>", collectively comprised <span class = "highlight"> <b>36%</b> </span> of Sydney's total employment.</p>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 1
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }							
			],
            onChapterExit: [],
        },
        {
            id: 'section-14',
			title: '2041 Sydney Employment Forecast',
            description: `
			<p>By 2041, employment in Sydney is projected to reach approximately <b>3.62 million</b>.</p>
			<p>The anticipated job growth aligns with the current distribution, where traditional places of work (POW SA2s) are expected to expand. Notable areas like Sydney CBD's <b>"Sydney - Millers Point"</b>, <b>"Macquarie Park - Marsfield"</b> and <b>"Parramatta - North"</b> are forecasted to experience significant employment increases. </p> 
			<img src="assets/img/chapters/emp41.svg" width = "200" height = "200"></div>
			<p>Additionally, the construction of Sydney's secondary airport and the development of the <a href="https://www.planning.nsw.gov.au/plans-for-your-area/priority-growth-areas-and-precincts/western-sydney-aerotropolis"> <b>Western Sydney Aerotropolis</b></a> are set to catalyze job growth in western Sydney SA2s,including <b>"Austral - Greendale"</b>,<b>"Badgerys Creek"</b> and <b>"Penrith"</b>. </p>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 1
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }							
			],
            onChapterExit: [],			
        },        
        {
            id: 'section-15',
            title: 'Sydney Employment Growth Forecast 2021-2041',
            description: `
			<p>Recent projections indicate that employment in Sydney will expand from <b>2.72 million in 2021</b> to <b>3.62 million by 2041</b>, translating to an increase of <b>900,000</b> jobs over the next two decades. This growth marks an enhancement of approximately <b>255,000</b> jobs compared to the Sep22 forecast from the previous year.</p>
			<img src="assets/img/chapters/nsw_emp.svg" width = "500"></div>
			<p>Currently, Sydney's employment figures are nearing pre-pandemic figures, with a shortfall of just <b>124,000</b> jobs, which represents about <span class = "highlight"><b>95.7%</b></span> of the total employment recorded in Sep19.</p>
			<img src="assets/img/chapters/emp.svg" width = "200"></div>
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 1
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }							
			],
            onChapterExit: [],		       
        },
		{
            id: 'section-16',
			title: '2021 Melbourne Employment Overview',
            description: `
			<p>In 2021, Melbourne's employment stood at <b>2.60 million</b>.</p>
			<p>At the SA2 level within Greater Melbourne, the job distribution was notably uneven. Specifically, "<b>Melbourne CBD - West</b>" and "<b>Melbourne CBD - East</b>" combined accounted for <b>247,505 jobs</b>, making up <b>9.5%</b> of the city's total employment.</p>
			<img src="assets/img/chapters/emp21.svg" width = "200"></div>
			<p>Additionally, the top 10 SA2 areas, which include "<b>Docklands</b>", "<b>Dandenong - South</b>", "<b>Parkville</b>" and "<b>Port Melbourne Industrial</b>", collectively contributed to <span class = "highlight"><b>27%</b></span> of Melbourne's total employment.</p>
			`,
             location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 1
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }						
            ]
            ,
            onChapterExit: [               
            ],					
        },
         {
            id: 'section-17',
			title: '2041 Melbourne Employment Forecast',
            description: `
			<p>By 2041, Melbourne's employment is projected to reach approximately <b>3.62 million</b>.</p>
			<p>The expected job growth aligns with the current distribution patterns, where traditional places of work (POW) SA2s, such as "<b>Melbourne CBD - West</b>" and "<b>Melbourne CBD - East</b>", "<b>Parkville</b>" and "<b>Docklands</b>" are anticipated to experience significant employment increases. </p> 
			<img src="assets/img/chapters/emp41.svg" width = "200"></div>
			<p>Unlike Sydney, Greater Melbourne does not have greenfield job hubs akin to the Sydney Aerotropolis. Instead, job growth within the "<b>Melbourne Inner</b>" SA4 is significant, accounting for <span class="highlight"><b>36%</b></span> of the city's total projected employment growth.</p>
			`,
           location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 1
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }						
            ]
            ,
            onChapterExit: [               
            ],	   
        },
        {
            id: 'section-18',
			title: 'Melbourne Employment Growth Forecast 2021-2041',
            description: `
			<p>Current projections suggest Melbourne's employment will rise from <b>2.60 million in 2021</b> to <b>3.62 million by 2041</b>. This indicates an increase of approximately <b>1.02 million</b> new jobs over the next two decades. The growth signifies an uplift of about <b>255,000 jobs</b> compared to the Sep22 forecast from the previous year.</p>
			<img src="assets/img/chapters/vic_emp.svg" width = "500"></div>
			<p>Currently, Melbourne's employment figures are nearing pre-pandemic figures, with a shortfall of just <b>169,000</b> jobs, which represents about <span class = "highlight"><b>96.7%</b></span> of the total employment recorded in Sep19.</p>
			<img src="assets/img/chapters/emp.svg" width = "200"></div>
			`,
            location: {
                center: [144.8, -37.80],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [    
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 1
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }						
            ]
            ,
            onChapterExit: [               
            ],         
        },
        {
            id: 'section-19',
            title: '2021 Brisbane Employment Overview',
            description: `
			<p>In 2021, Greater Brisbane's employment stood at <b>1.86 million</b>.</p>
			<p>Job distribution at the SA2 level within Greater Brisbane in 2021 was notably uneven. Specifically, <b>"Brisbane City"</b> alone had <b>171,008 jobs</b>, representing <span class="highlight"><b>9.1%</b></span> of the total employment in the area.</p>
			<img src="assets/img/chapters/emp21.svg" width = "200"></div>
			<p>Furthermore, the top 10 SA2s, which include "<b>South Brisbane</b>", "<b>Rocklea - Acacia Ridge</b>", "<b>Fortitude valley</b>", "<b>Brisbane Airport</b>", "<b>Newstead - Bowen Hills</b>" collectively comprised <span class="highlight"> <b>22.3%</b> </span> of Greater Brisbane's total employment.</p>
			`,
            location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 1
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }			
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-20',
			title: '2041 Brisbane Employment Forecast',
            description: `
			<p>By 2041, employment in South East Queensland (SEQ) is projected to reach approximately <b>2.71 million</b>.</p>
			<p>The anticipated job growth is expected to align with current trends, with traditional places of work (POW) SA2s, such as "<b>Brisbane CBD</b>" and "<b>South Brisbane</b>", "<b>Kelvin Grove - Herston</b>" and "<b>Woolloongabba</b>" seeing an increase in employment opportunities. </p> 
			<img src="assets/img/chapters/emp41.svg" width = "200"></div>
			<p>Unlike Sydney with its Aerotropolis, SEQ does not have comparable greenfield job hubs. However, the "<b>Brisbane Inner City</b>" SA4 is a significant area of growth, projected to contribute to <span class="highlight"><b>25%</b></span> of the region's total job increase.</p>
			`,
            location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 1
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }			
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-21',
			title: 'Brisbane Employment Growth Forecast 2021-2041',
            description: `
			<p>Current projections indicate that employment in South East Queensland (SEQ) will increase from <b>1.86 million in 2021</b> to <b>2.71 million by 2041</b>. This growth represents an addition of <b>0.85 million new jobs</b> over the next two decades, with an increase of approximately <b>255,000 jobs</b> from the Sep22 forecast.</p>
			<img src="assets/img/chapters/qld_emp.svg" width = "500"></div>
			<p>Currently, SEQ's employment exceeds its pre-pandemic levels by <b>36,728 jobs</b>, standing at <span class="highlight"><b>101.4%</b></span> of the Sep19 total. This resilience suggests that Queensland experienced minimal impact from COVID-19 and is poised for optimized growth, according to the latest DAE forecasts.</p>
			<img src="assets/img/chapters/emp.svg" width = "200" height = "200"></div>
			`,
            location: {
                center: [152.926, -27.5205],
                zoom: 10.5,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 1
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                }			
            ]
            ,
            onChapterExit: [   				     
            ],          
        },   
		{
            id: 'section-34',
			title: 'Summary',
			description: `
			<p>In conclusion, Sydney's growth is predominantly in the West, Brisbane's in the South, and Melbourne experiences city-wide expansion. Brisbane's growth pattern is distinct, characterized by less infill development and more greenfield expansion on the outskirts, reflecting the city's higher reliance on cars, lower public transport utilization, and the allure of lifestyle assets (beaches and bays) distant from the city center.</p>
			<img src="assets/img/chapters/sa4_growth.svg" width = "500"></div>			
			<p>Conversely, Sydney and Melbourne are poised for substantial infill development in their middle suburbs. This trend leverages their robust public transport systems, urban-centric lifestyle amenities, and a more entrenched acceptance of denser living environments.</p>			
			`,
            location: {
                center: [150.9, -33.86],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 1
                }			
            ]
            ,
            onChapterExit: [   				     
            ],          
        }, 
		{
            id: 'section-22',
            title: '2020 GWA Population Overview',					
            description: `
			<p>In 2020, the population of Greater Washington Area (GWA) reached <b>7.43 million</b>.</p>
			<table border="1">
			<tr>
			<th style="text-align: left; font-weight: bold;">County</th>
			<th style="text-align: left; font-weight: bold;">Population</th>
			</tr>
			
			<tr>
			<td  style="text-align: left;">Fairfax</td >
			<td  style="text-align: left;">1,187,186</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Montgomery</td >
			<td  style="text-align: left;">1,061,242</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Prince George's</td >
			<td  style="text-align: left;">965,607</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">DC</td >
			<td  style="text-align: left;">690,104</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Anne Arundel</td >
			<td  style="text-align: left;">588,768</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Prince William</td >
			<td  style="text-align: left;">542,606</td >
			</tr>
			
			</table>
			<p>Six counties exceed 500,000 residents: <b>Fairfax</b>, <b>Montgomery</b>, <b>Prince George's</b>, <b>DC</b>, <b>Anne Arundel</b>, and <b>Prince William</b>. The top three—Fairfax, Montgomery, and Prince George's—are centrally located, while DC, Anne Arundel, and Prince William Counties are on the outskirts.			</p>
			<img src="assets/img/chapters/gwa_pop20.png" width = "150"></div>			
			`,
			location: {
                center: [-77.175259, 38.791206],
                zoom: 9,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'gwa_taz',
                    opacity: 1
                },
				{
                    layer: 'gwa_asset',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 0
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-23',
			title: '2040 GWA Population Forecast',
            description: 
			`
			<p>By 2040, the population of Greater Washington Area (GWA) is expected to reach approximately <b>8.77 million</b>.</p>			
			<p>The 2040 forecast indicates substantial population growth in certain key counties: <b>Fairfax</b>, <b>Montgomery</b>, <b>Loudoun</b>, <b>the District of Columbia</b>, <b>Prince William</b>, and <b>Prince George's</b>, all experiencing growth exceeding 100,000 residents. </p>
			<p>The District of Columbia is situated within the inner modeling region, while Loudoun and Prince William are located in the Outer region. The remaining three—<b>Fairfax</b>, <b>Montgomery</b>, and <b>Prince George's</b>—reside within the middle modeling region.</p> 
			<img src="assets/img/chapters/gwa_pop40.png" width = "150" height = "200"></div>						
			`,
            location: {
                center: [-77.175259, 38.791206],
                zoom: 9,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'gwa_taz',
                    opacity: 1
                },
				{
                    layer: 'gwa_asset',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 1
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-24',
			title: 'GWA Population Growth Forecast 2020-2040',
            description: `			
			<p>Current projections estimate that the population of the Greater Washington Area (GWA) will increase from approximately <b>7.43 million in 2020</b> to <b>8.77 million by 2040</b>, indicating a growth of <b>1.35 million residents</b>. The inner core counties are expected to have an annual growth rate of <b>0.8%</b>, while the middle ring counties indicate a growth of <b>0.6%</b>, and the outer ring counties have growth rates of <b>0.9%</b>. </p>
			<img src="assets/img/chapters/gwa_pgrowth.png" width = "150"></div>
			<p>"<b>Alexandria</b>" is the only inner ring county has an annual growth rate of greater than <b>1.1%</b>, while the "<b>District of Columbia</b>" has CAGA of <b>0.9%</b>.</p>
			`,
            location: {
                center: [-77.175259, 38.791206],
                zoom: 10,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                },				
				{
                    layer: 'gwa_taz',
                    opacity: 0
                },
				{
                    layer: 'gwa_asset',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 0
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 1
                }
            ]
            ,
            onChapterExit: [   				     
            ],          
        },
		{
            id: 'section-25',
            title: '2020 GWA Employment Overview',					
            description: `
			<p>In 2020, the employment of Greater Washington Area (GWA) reached <b>4.32 million</b>.</p>
			<table border="1">
			<tr>
			<th style="text-align: left; font-weight: bold;">County</th>
			<th style="text-align: left; font-weight: bold;">Employment</th>
			</tr>
			
			<tr>
			<td  style="text-align: left;">District of Columbia, DC</td >
			<td  style="text-align: left;">836,677</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Fairfax County, VA</td >
			<td  style="text-align: left;">728,031</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Montgomery County, MD</td >
			<td  style="text-align: left;">538,796</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Anne Arundel County</td >
			<td  style="text-align: left;">380,148</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Prince George's County</td >
			<td  style="text-align: left;">346,958</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Arlington County, VA</td >
			<td  style="text-align: left;">225,312</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Howard County</td >
			<td  style="text-align: left;">216,049</td >
			</tr>
			
			</table>
			<p>Seven counties, as shown in the table above, boast employment figures surpassing 200,000. Among them, the "<b>District of Columbia</b>" and "<b>Arlington</b>" stand as the sole representatives of the inner ring counties, while "<b>Anne Arundel</b>" and "<b>Howard</b>" lie on the outskirts. The remaining counties belong to the middle ring. </p>
			<img src="assets/img/chapters/gwa_emp20.png" width = "150"></div>			
			`,
			location: {
                center: [-77.175259, 38.791206],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                },				
				{
                    layer: 'gwa_taz',
                    opacity: 1
                },
				{
                    layer: 'gwa_asset',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 0
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 1
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-26',
			title: '2040 GWA Employment Forecast',
            description: 
			`
			<p>By 2040, the employment of Greater Washington Area (GWA) is expected to reach approximately <b>5.13 million</b>.</p>			
			<p>The 2040 forecast indicates substantial employment growth in certain key counties: <b>Fairfax County</b>, <b>District of Columbia</b>, <b>Montgomery County</b>, all experiencing growth exceeding 80,000 jobs. </p>
			<p>The "<b>District of Columbia</b>" is situated within the inner modeling region, while "<b>Fairfax</b>" and "<b>Montgomery</b>" are within the middle modeling region.</p> 
			<img src="assets/img/chapters/gwa_emp40.png" width = "160"></div>					
			`,
            location: {
                center: [-77.175259, 38.791206],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'gwa_taz',
                    opacity: 1
                },
				{
                    layer: 'gwa_asset',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 0
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 1
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-27',
			title: 'GWA Employment Growth Forecast 2020-2040',
            description: `
			<p>Current projections estimate that the employment of the Greater Washington Area (GWA) will increase from approximately <b>4.32 million in 2020</b> to <b>5.13 million by 2040</b>, indicating a growth of <b>806 million residents</b>. The inner core and middle ring counties are expected to have an annual growth rate of <b>0.8%</b>, and the outer ring counties have growth rates of <b>1.0%</b>. </p>
			<img src="assets/img/chapters/gwa_egrowth.png" width = "200"></div>
			<p>"<b>Arlington</b>" is the only inner ring county has an annual growth rate of greater than <b>1.1%</b>, while the "<b>District of Columbia</b>" has CAGA of <b>0.8%</b>.</p>
			`,
            location: {
                center: [-77.175259, 38.791206],
                zoom: 10,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },
				{
                    layer: 'gwa_asset',
                    opacity: 1
                },				
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'gwa_taz',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop20',
                    opacity: 0
                },
				{
                    layer: 'gwa_pop40',
                    opacity: 0
                },	
				{
                    layer: 'gwa_emp20',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp40',
                    opacity: 0
                },
				{
                    layer: 'gwa_emp_growth',
                    opacity: 1
                },
				{
                    layer: 'gwa_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],          
        },
		{
            id: 'section-28',
            title: '2021 Montreal Population Overview',					
            description: `
			<p>In 2021, the population of Montreal modelling area reached <b>4.29 million</b>.</p>
			
			<table border="1">
			<tr>
			<th style="text-align: left; font-weight: bold;">ER</th>
			<th style="text-align: left; font-weight: bold;">Population</th>
			</tr>
			
			<tr>
			<td  style="text-align: left;">Montreal</td >
			<td  style="text-align: left;">1,959,021</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Monteregie</td >
			<td  style="text-align: left;">1,166,000</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Laval</td >
			<td  style="text-align: left;">425,471</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Laurentides</td >
			<td  style="text-align: left;">424,172</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Lanaudiere</td >
			<td  style="text-align: left;">315,600</td >
			</tr>				
			
			</table>
			
			<p>The populations of "<b>Montreal</b>" and "<b>Monteregie</b>" both surpass one million, while the populations of the other three Economic Regions (ERs) are all less than 400,000. </p>
			
			<img src="assets/img/chapters/mon_pop21.png" width = "150"></div>			
			`,
			location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'montreal_taz',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 1
                },
				{
                    layer: 'montreal_a25',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 0
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-29',
			title: '2041 Montreal Population Forecast',
            description: 
			`
			<p>By 2041, the population of Greater Montreal area is expected to reach approximately <b>5.16 million</b>.</p>					
			<p>The forecast indicates substantial population growth in <b>Montreal</b>, and <b>Monteregie</b>, both experiencing growth exceeding 250,000 residents. </p>			
			<img src="assets/img/chapters/mon_pop41.png" width = "150"></div>					
			`,
            location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'montreal_taz',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 0
                },
				{
                    layer: 'montreal_a25',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 1
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-30',
			title: 'Montreal Population Growth Forecast 2021-2041',
            description: `
			<p>Current projections estimate that the population of the Greater Montreal Area will increase from approximately <b>4.50 million in 2021</b> to <b>5.16 million by 2041</b>, indicating a growth of <b>0.87</b> million residents. "<b>Montreal</b>" is expected to have an annual growth rate of <b>0.7%</b>, while "<b>Monteregie</b>" indicates a growth of <b>1.0%</b>. </p>
			<img src="assets/img/chapters/mon_pgrowth.png" width = "160"></div>			
			`,
            location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'montreal_taz',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 0
                },
				{
                    layer: 'montreal_a25',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 0
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 1
                }
            ]
            ,
            onChapterExit: [   				     
            ],          
        },
		{
            id: 'section-31',
            title: '2021 Montreal Employment Overview',					
            description: `
			<p>In 2021, the employment of Montreal modelling area reached <b>2.21 million</b>.</p>
			
			<table border="1">
			<tr>
			<th style="text-align: left; font-weight: bold;">ER</th>
			<th style="text-align: left; font-weight: bold;">Employment</th>
			</tr>
			
			<tr>
			<td  style="text-align: left;">Montreal</td >
			<td  style="text-align: left;">1,407,102</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Monteregie</td >
			<td  style="text-align: left;">474,162</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Laval</td >
			<td  style="text-align: left;">182,366</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Laurentides</td >
			<td  style="text-align: left;">172,736</td >
			</tr>
			
			<tr>
			<td  style="text-align: left;">Lanaudiere</td >
			<td  style="text-align: left;">94,589</td >
			</tr>				
			
			</table>
			
			<p>The employment of "<b>Montreal</b>" surpasses one million, "Monteregie" has an employment of around half a million, while the other three Economic Regions (ERs) are all less than 200,000. </p>
			<img src="assets/img/chapters/mon_emp21.png" width = "150"></div>			
			`,
			location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },	
				{
                    layer: 'sa2',
                    opacity: 0
                },				
				{
                    layer: 'montreal_taz',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 0
                },
				{
                    layer: 'montreal_a25',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 0
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 1
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],	      
        },
        {
            id: 'section-32',
			title: '2041 Montreal Employment Forecast',
            description: 
			`
			<p>By 2041, the employment of Greater Montreal area is expected to reach approximately <b>2.64 million</b>.</p>					
			<p>The forecast indicates substantial employment growth in <b>Montreal</b> experiencing growth exceeding 250,000, followed by "<b>Monteregie</b>" with a growth of approximate 79,000 jobs. </p>	
			<img src="assets/img/chapters/mon_emp41.png" width = "150"></div>					
			`,
            location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'montreal_taz',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 0
                },
				{
                    layer: 'montreal_a25',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 0
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 1
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],     
        },
        {
            id: 'section-33',
			title: 'Montreal Employment Growth Forecast 2021-2041',
            description: `
			<p>Current projections estimate that the employment of the Greater Montreal Area will increase from approximately <b>2.20 million in 2021</b> to <b>2.64 million by 2041</b>, indicating a growth of <b>0.43</b> million employment. "<b>Montreal</b>" is expected to have an annual growth rate of <b>1.0%</b>, while "<b>Monteregie</b>" indicates a growth of <b>0.8%</b>. </p>
			<img src="assets/img/chapters/mon_egrowth.png" width = "160"></div>			
			`,
            location: {
                center: [-73.616796, 45.629307],
                zoom: 10,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [      
				{
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                },	
				{
                    layer: 'pop21',
                    opacity: 0
                },
                {
                    layer: 'pop41',
                    opacity: 0
                },	
				{
                    layer: 'emp21',
                    opacity: 0
                },
                {
                    layer: 'emp41',
                    opacity: 0
                },					
				{
                    layer: 'sa2',
                    opacity: 0
                },
				{
                    layer: 'montreal_taz',
                    opacity: 0
                },
				{
                    layer: 'montreal_pop21',
                    opacity: 0
                },
				{
                    layer: 'montreal_a25',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop41',
                    opacity: 0
                },	
				{
                    layer: 'montreal_emp21',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp41',
                    opacity: 0
                },
				{
                    layer: 'montreal_emp_growth',
                    opacity: 1
                },
				{
                    layer: 'montreal_pop_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [   				     
            ],          
        },		
    ],
};
