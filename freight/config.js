var config = {
    style: 'mapbox://styles/jackjin20/clvn2gomt00q001rdh32pbqm4',
    accessToken: 'pk.eyJ1IjoiamFja2ppbjIwIiwiYSI6ImNscnI2dXVpdTBhdzYyaXFoNnVxOTRsZDQifQ.RKQxVe5XGmFRitCcLepVtQ',
    showMarkers: false,
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    chapters: [                              
        {
            id: 'section-1',
            title: '2021 Sydney Truck Trips Overview',
            description: `
			<p>In 2021, Greater Sydney recorded a total of <b>216,134</b> truck trips.</p>
			<p>The distribution of these trips at the SA4 level within the Sydney Metro area was notably uneven. Specifically, 20 SA2 regions reported more than 2,000 truck trips each, collectively accounting for approximately 31% of the total trips. Among these, '<b>Sydney (North) - Millers Point</b>' experienced the highest volume with <b>7,103</b> trips, which is roughly 40% more than the '<b>Prospect Reservoir</b>', the second highest.</p>
			<img src="assets/img/chapters/tot21.png" width = "400"></div>
			<p>The SA2 areas with significant truck traffic are primarily located within the SA4 regions of '<b>Sydney - City and Inner South</b>', '<b>Sydney - Parramatta</b>', '<b>Sydney - Blacktown</b>', and '<b>Sydney - Outer South West</b>', among others. </p>
			<p>For a more granular analysis, the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a> Tableau dashboard is available. This resource provides a detailed view of the distribution of truck trips across Sydney, highlighting key trends and areas of high activity.</p>
			<img src="assets/img/chapters/trk21.svg" width = "120"></div>
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
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 1
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
			id: 'section-2',
            title: '2021 Truck Trips in Sydney\'s Inner City',
            description: `
			<p>In 2021, the '<b>Sydney - City and Inner South</b>' and '<b>Sydney - Inner South West</b>' SA4s together recorded <b>55,336</b> truck trips, representing <b>25.6%</b> of the total trips in Greater Sydney. Key areas contributing to this high volume include the Sydney CBD and the industrial zones surrounding Port Botany.</p>
			<p>Below is a table listing the SA2 regions with more than 2,000 truck trips, highlighting the major hubs of truck activity in the inner city.</p>
			<img src="assets/img/chapters/inner21.png" width = "400"></div>
			<p>For those requiring a more comprehensive analysis, the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a> Tableau dashboard is available. This detailed resource delves deeper into the distribution of truck trips across Sydney, offering insights into specific patterns and areas of concentrated truck activity.</p>
			<img src="assets/img/chapters/trk21.svg" width = "120"></div>
			`,
            location: {
                center: [151.14, -33.91],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 1
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
			id: 'section-3',
            title: '2021 Truck Trips of Western Sydney',
            description: `
			<p>In 2021, the regions of '<b>Sydney - Blacktown</b>' and '<b>Sydney - South West</b>' in Western Sydney accounted for <b>41,381</b> truck trips, representing <b>19%</b> of the total truck trips across Greater Sydney.</p>
			<p>The highest concentrations of truck traffic were noted in industrial areas known for substantial manufacturing and warehousing activities. Key SA2 regions such as '<b>Prospect Reservoir</b>', '<b>Wetherill Park Industrial</b>', and '<b>Chipping Norton - Moorebank</b>' were among the top contributors </p>
			<img src="assets/img/chapters/west21.png" width = "400"></div>
			<p>For a more detailed breakdown of truck trip distributions and to gain deeper insights into specific areas, users are encouraged to consult the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a>. This Tableau dashboard provides an in-depth view of the truck traffic patterns across Sydney, emphasizing areas of high activity.</p>
			<img src="assets/img/chapters/trk21.svg" width = "120"></div>
			`,
            location: {
                center: [150.83, -33.87],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 1
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
            id: 'section-4',
            title: 'Projected 2031 Truck Trips in Sydney',
            description: `
			<p>In 2031, it is projected that truck trips in Greater Sydney will total <b>255,979</b>. The distribution of these trips at the SA4 level within Sydney Metro continues to be uneven. Notably, <b>31</b> SA2 areas are expected to record over 2,000 truck trips each, accounting for approximately <b>40%</b> of the total trips. '<b>Sydney (North) - Millers Point</b>' remains the area with the highest number of truck trips, though its lead has narrowed to just 19% more than '<b>Prospect Reservoir</b>', which ranks second.</p>
			<img src="assets/img/chapters/tot31.png" width = "400"></div>
			<p>The areas with high truck trip volumes continue to be concentrated in the SA4 regions of '<b>Sydney - City and Inner South</b>', '<b>Sydney - Parramatta</b>', '<b>Sydney - Blacktown</b>', and '<b>Sydney - Outer South West</b>', among others.</p>
			<p>For stakeholders seeking more detailed projections and analyses, the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a> Tableau workbook remains available. This valuable resource offers a comprehensive view of the expected distribution of truck trips across Sydney, highlighting future trends and key areas of activity.</p>
			<img src="assets/img/chapters/trk31.svg" width = "120"></div>
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
                    layer: 'trk31',
                    opacity: 1
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
			id: 'section-5',
            title: 'Forecasted 2031 Truck Trips in Sydney Inner City',
            description: `
			<p>In 2031, the '<b>Sydney - City and Inner South</b>' and '<b>Sydney - Inner South West</b>' areas are projected to record <b>64,347</b> truck trips, accounting for <b>25.1%</b> of the total truck trips in Greater Sydney. This underscores the significant transport activity in these densely populated and industrially active regions.</p>
			<p>Primary truck trip generators are expected to remain the <b>Sydney CBD</b> and the industrial areas around <b>Port Botany</b>. Below is a table listing the SA2 regions with more than 2,000 truck trips, highlighting the areas with the most substantial traffic.</p>
			<img src="assets/img/chapters/inner31.png" width = "400"></div>
			<p>For a more comprehensive understanding of the projected distribution of truck trips and to analyze trends in detail, users are encouraged to consult the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a> Tableau workbook. This resource provides an in-depth look at truck trip patterns within Sydney, focusing on areas of high activity and growth.</p>
			<img src="assets/img/chapters/trk31.svg" width = "120"></div>
			`,
            location: {
                center: [151.14, -33.91],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 1
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
			id: 'section-6',
            title: '2031 Truck Trips Forecast for Western Sydney',
            description: `
			<p>In 2031, the areas of '<b>Sydney - Blacktown</b>' and '<b>Sydney - South West</b>' in Western Sydney are projected to account for <b>49,911</b> truck trips, making up <b>19%</b> of Greater Sydney’s total truck trips. These figures highlight the substantial role of <b>Western Sydney</b> as a key hub for logistics and transportation.</p>
			<p>The highest truck trip volumes are expected in industrial areas known for extensive <b>manufacturing</b> and <b>warehousing</b> activities, with '<b>Prospect Reservoir</b>', '<b>Wetherill Park Industrial</b>', and '<b>Chipping Norton - Moorebank</b>' leading in terms of truck traffic.</p>
			<img src="assets/img/chapters/west31.png" width = "400"></div>
			<p>For stakeholders interested in a more detailed analysis, the <a href="https://tableau.transurban.com/t/StrategyandAnalysis/views/NSWFreightTruckTrips/compare">NSW Freight Truck Trips Analysis</a> Tableau workbook is recommended. This comprehensive resource provides an in-depth view of the distribution and trends of truck trips across Sydney, with particular attention to key industrial zones.</p>
			<img src="assets/img/chapters/trk31.svg" width = "120"></div>
			`,
            location: {
                center: [150.83, -33.87],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
				speed: 0.8
            },
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',	
            onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 1
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 0
                },
                {
                    layer: 'asset',
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
            id: 'section-7',
            title: 'Sydney Truck Trip Growth 2021-2031',
            description: `
			<p>The projected data indicates a significant increase in truck trips across Sydney, rising from <b>216,133 in 2021</b> to <b>255,979 by 2031</b>. This marks a growth of <b>39,845</b> trips over the decade.</p>
			<img src="assets/img/chapters/totgrow.png" width = "500"></div>
			<p>Traditional employment hubs such as '<b>Wetherill Park Industrial</b>', '<b>Prospect Reservoir</b>', '<b>Sydney (North) - Millers Point</b>', '<b>Banksmeadow</b>', and '<b>Holsworthy - Wattle Grove</b>' are expected to experience substantial growth, each with an increase of over 1,000 trips. This growth underscores the expanding logistical demands in these key areas. </p>
			<p>This trend reflects ongoing industrial activity and highlights areas poised for substantial logistical expansions, pointing to strategic opportunities for infrastructure and service enhancements.</p>
			<img src="assets/img/chapters/growth.svg" width = "200"></div>
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
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 1
                },
                {
                    layer: 'asset',
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
            id: 'section-8',
            title: 'Sydney Inner City Truck Trip Growth 2021-2031',
            description: `
			<p>The freight model forecasts a significant increase in truck trips for '<b>Sydney - City and Inner South</b>' and '<b>Sydney - Inner South West</b>', from <b>53,336 in 2021</b> to <b>64,347 by 2031</b>. This growth, amounting to an influx of <b>9,011</b> truck trips, represents approximately <b>22.6%</b> of the total trip growth projected for Greater Sydney over the decade.</p>
			<img src="assets/img/chapters/inner_grow.png" width = "500"></div>
			<p>Among the areas analyzed, '<b>Sydney (North) - Millers Point</b>' and '<b>Banksmeadow</b>' stand out, each expected to see trip growth exceeding 1,000.</p>
			<p>This increase highlights the expanding freight demands within key urban cores, reflecting ongoing economic development and the intensification of commercial activities in these regions.</p>
			<img src="assets/img/chapters/growth.svg" width = "200"></div>
			`,
            location: {
                center: [151.14, -33.91],
                zoom: 12,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 1
                },
                {
                    layer: 'asset',
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
            id: 'section-9',
            title: 'Sydney Parramatta and Blacktown Truck Trip Growth 2021-2031',
            description: `
			<p>The freight model projects that truck trips in '<b>Sydney - Parramatta</b>' and '<b>Sydney - Blacktown</b>' will increase from <b>45,061 in 2021</b> to <b>53,006 by 2031</b>, resulting in an influx of <b>7,945</b> truck trips over the decade. This growth represents approximately <b>20%</b> of the total truck trip growth in Greater Sydney.</p>
			<img src="assets/img/chapters/black_grow.png" width = "500"></div>
			<p>Notable increases are expected particularly in '<b>Strathfield South</b>' and '<b>Lidcombe</b>', with each area anticipating trip growth exceeding 1,000.</p>
			<p>These figures underscore the significant expansion of logistical activities in these key suburban districts, highlighting the increasing demand for freight and transportation services tied to economic development and urban growth in the region.</p>
			<img src="assets/img/chapters/growth.svg" width = "200"></div>
			`,
            location: {
                center: [151.00, -33.87],
                zoom: 12,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 1
                },
                {
                    layer: 'asset',
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
            id: 'section-10',
            title: 'Western Sydney Truck Trip Growth 2021-2031',
            description: `
			<p>The freight model forecasts that truck trips in '<b>Sydney - South West</b>' and '<b>Sydney - Blacktown</b>' will increase from <b>41,381 in 2021</b> to <b>49,911 by 2031</b>. This surge of <b>8,530</b> truck trips over the decade accounts for approximately <b>21.4%</b> of the total truck trip growth in Greater Sydney.</p>
			<img src="assets/img/chapters/west_grow.png" width = "500"></div>
			<p>Significant increases are projected specifically for '<b>Wetherill Park Industrial</b>' and '<b>Holsworthy - Wattle Grove</b>', with each area experiencing growth exceeding 1,000 truck trips.</p>
			<p>This highlights the ongoing expansion of industrial activities and the corresponding rise in logistics and transportation demands within these crucial zones of Western Sydney.</p>
			<img src="assets/img/chapters/growth.svg" width = "200"></div>
			`,
            location: {
                center: [150.83, -33.92],
                zoom: 12,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },  
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',	
			onChapterEnter: [				
				{
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 1
                },
                {
                    layer: 'asset',
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
            id: 'section-11',
			title: 'Summary of Sydney\'s Freight Growth 2021-2031',
			description: `
			<p>In conclusion, the freight modeling for Sydney projects significant growth across several key regions over the next decade. Predominantly, the areas of '<b>Sydney - City and Inner South</b>', '<b>Sydney - South West</b>', and '<b>Sydney - Parramatta</b>' are expected to see the most substantial increases in truck trips. These regions together will contribute significantly to the overall increase in freight activity in Greater Sydney: </p>
			<ol>
			<li><b>'Sydney - City and Inner South' and 'Sydney - Inner South West'</b> will see a rise of <b>9,011</b> truck trips, accounting for approximately <b>22.6%</b> of the total growth.</li>
			<li><b>'Sydney - Parramatta' and 'Sydney - Blacktown'</b> are projected to increase by <b>7,945</b> truck trips, making up about <b>20%</b> of the total growth.</li>
			<li><b>'Sydney - South West' and 'Sydney - Blacktown'</b> will experience an increase of <b>8,530</b> truck trips, representing around <b>21.4%</b> of the growth. </li>			
			</ol>
			<img src="assets/img/chapters/sa4_grow.png" width = "400"></div>			
			<p>Key industrial areas such as '<b>Wetherill Park Industrial</b>', '<b>Prospect Reservoir</b>', and '<b>Chipping Norton - Moorebank</b>' continue to be major hubs of activity, reflecting the ongoing expansion of manufacturing and warehousing capacities. Notable growth is also expected in emerging areas like '<b>Strathfield South</b>' and '<b>Lidcombe</b>', alongside established centers like '<b>Sydney (North) - Millers Point</b>' and '<b>Banksmeadow</b>'.</p>	
			<p>This decade will witness substantial logistical expansions and increased demands across Greater Sydney, emphasizing the need for strategic planning in infrastructure and transportation services to accommodate this growth. For stakeholders and planners, the detailed NSW Freight Truck Trips Analysis provides crucial insights into these trends, helping guide future development and operational strategies.</p>
			`,
            location: {
                center: [150.9, -33.89],
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
                    layer: 'trk31',
                    opacity: 0
                },
                {
                    layer: 'trk21',
                    opacity: 0
                },	
				{
                    layer: 'growth',
                    opacity: 1
                },
                {
                    layer: 'asset',
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
    ],
};
