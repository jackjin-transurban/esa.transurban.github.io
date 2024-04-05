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
            title: 'DAE Sep23 commission forecasts released',
            description: '<p>March is a busy period for the Economics and Spatial Analytics team (ESA). That\'s because it is the month where we sign off on our annual demographic forecasts. These forecasts are known as our “September” forecasts (based on timing of key economic data) and contain key insights on how our cities are expected to grow into the future. </p><p> The September forecasts are developed each year by Deloitte Access Economics (DAE) and contain a wealth of data relating to population, labour force, students, income levels, GDP and jobs within Sydney, Melbourne and Brisbane. The data is also \‘spatial\’ in nature - that is, all of this data is attached to a specific place.</p>',
            location: {
                center: [151.20, -33.86],
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
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [
                {
                     layer: 'pop_growth',
                     opacity: 0
                 },
                {
                    layer: 'emp_growth',
                    opacity: 0
                }
            ],			
        },
        {
            id: 'section-2',
            title:'Why is demographic data so important?',
            description: '<p>These datasets serve an important function across TU. For example, the traffic team requires this data for their Strategic Transport Models (STM) to estimate the level of traffic on our roads in the future. Development teams need this data to assist them with consideration of new proposals and to feed into their financial models. The ExCo needs to understand the trends and themes when talking to investors and stakeholders.</p><p>Examples of what we can answer include:<ol>	<li> What’s the rate of population growth in our growth areas? </li>	<li> What are the fastest growing industrial areas? </li>	<li> How are job types changing in our CBD’s? </li>		<li> What’s the Gross Domestic Product of certain parts of our city? </li>	<li> How will this new development project (i.e Badgerys Creek) impact population and employment growth? </li> </p>',
            location: {
                center: [144.9, -37.80],
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
                    layer: 'pop_growth',
                    opacity: 0
                },
                {
                    layer: 'emp_growth',
                    opacity: 0
                }
            ]
            ,
            onChapterExit: [
                {
                     layer: 'pop_growth',
                     opacity: 0
                 },
                {
                    layer: 'emp_growth',
                    opacity: 0
                }
            ],						
        },
        {
            id: 'section-3',
			title: 'What does the latest round of data show?',
            description: '<p>We will look into the detailed the population projections of Sydney, Melbourne and Brisbane between 2021 and 2041, by each annual DAE release. We want to compare by different versions to note if there have been any upgrading or downgrading made to our cities, which in turn may impact our assets. </p><p>A common question is also whether we are returning to pre-pandemic levels. To look at this, we can compare the latest results (Sep-23) against the light green line (Sep-19).</p>',
            location: {
                center: [153.026, -27.4705],
                zoom: 12,
                pitch: 60,
                bearing: 0,
				speed: 0.8
            },   
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',			
        },
        {
            id: 'section-4',
            title: 'Sydney population growth',
            description: '<p>The Tonlé Sap—the same lake that birthed the great Angkor Empire—sits at the heart of Cambodia. A seasonally flooded lake that peaks in November, its ebb and flow replenishes many natural and agricultural habitats with water and sediment.</p>',
            location: {
                center: [150.295, -33.730],
                zoom: 8.73,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'section-5',
			title: 'Key population growth regions',
            description: '<p>Filled to the brim, the lake becomes a breeding ground for many fish species. Most fish in the Mekong are migratory and travel long distances to spawn; the Tonlé Sap is an <a href="https://www.nationalgeographic.com/news/2017/03/mekong-river-fish-migrations/">important breeding spot</a> for many endemic species. The Silvery Carp—a crucial ingredient in the Cambodian <em>pra hoc</em>, a salty paste and staple condiment for millions along the river—is one such fish.</p> <p>The lake’s large floodplains (low-lying, seasonally flooded ground beside the river) are among the most productive freshwater fisheries in the world. Together with the country’s portion of the Mekong River, these floodplains provide an abundant supply of fish to the country at <a href="http://www.fao.org/fishery/facp/KHM/en#CountrySector-Overview">5,285,000 tonnes</a>—almost four times Cambodia’s marine production.</p><div class="image-block"><img src="assets/img/chapters/floodextent.svg"></div><i>Source: <a href="https://data.humdata.org/dataset/cambodia-other-0-0-0-0-0-0">OCHA ROAP, created by General Department of Cadastre and Geography (Ministry of Land Management, Urban Planning, and Construction; Cambodia), updated August 16, 2018.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 6.98,
                pitch: 0,
                bearing: 0
            },           
        },
        {
            id: 'section-6',
			title: 'Melbourne population growth',
            description: '<p>While all the Mekong countries rely on the river’s supply of fish, Cambodia is arguably the most dependent on it. Freshwater fish is essential to the food security of Cambodians; the country’s estimated consumption of fresh fish per capita is a high <a href="http://www.fao.org/fishery/facp/KHM/en#CountrySector-Overview">33kg per year.</a></p><div class="image-block"><img src="assets/img/chapters/fishconsumption.svg"></div><p>Fish is central to the diets of people in this region as a main source of protein. In fact, the lower Mekong basin serves the largest inland fishery in the world—producing an <a href="https://opendevelopmentmekong.net/topics/fishing-fisheries-and-aquaculture/">estimated 2.3 million tonnes of fish.</a></p><div class="image-block"><img src="assets/img/chapters/fishdependency.svg"></div><i>Source: <a href="https://data.opendevelopmentmekong.net/dataset/map_fish_dependency">Open Development Cambodia, created by Save Cambodia’s Wildlife’s 2013 Atlas Working Group. Dataset reference date 10 April 2015.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 6.36,
                pitch: 0,
                bearing: 0
            },           
        },
        {
            id: 'section-7',
            title: 'Melbourne employment growth',
            description: '<p>Farther south in Vietnam, the Mekong meets the South China Sea, where it fans out into the Mekong Delta. The numerous distributaries that discharge the Mekong into the sea explain its name here as the Nine Dragons River (Sông Cửu Long). An incredibly fertile region, the Mekong Delta supports one of the world’s most economically important crops: rice.</p>',
            location: {
                center: [150.295, -33.730],
                zoom: 8.11,
                pitch: 32,
                bearing: -21.6
            },           
        },
         {
            id: 'section-8',
			title: 'Brisbane population growth',
            description: '<p>Rice is a staple at most tables in Asia, and Vietnam is the <a href="http://www.fao.org/faostat/en/#data/QC/visualize">fifth</a> largest rice producer in the world. About half of that rice is grown in the Mekong Delta, which produces an astonishing estimated <a href="https://www.sciencedirect.com/science/article/abs/pii/S0303243418303064?via%3Dihub">20 million tonnes of rice</a> annually.</p><p>The Mekong Delta is incredibly dependent on the Mekong River. The river brings sediment downstream which helps shape the ground and soil of the delta. The river’s regular flooding replenishes the delta’s plains with nutrient-rich sediment from upstream, contributing to the delta’s fertility. Freshwater irrigated from the river, along with fresh rainwater and groundwater, supports the rice crops, grown and harvested in three separate seasons here. Both are equally dependent on the regulated climate of the Mekong watershed.</p><div class="image-block"><img src="assets/img/chapters/areaofrice.svg"></div><i>Source: <a href="https://data.opendevelopmentmekong.net/dataset/area-of-rice-by-locality-in-2018?type=dataset">Published by Open Development Vietnam, data from Statistics Documentation and Service Center - General Statistics Office, Số 54 Nguyễn Chí Thanh, Đống Đa, Hà Nội, date uploaded February 6, 2020.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 5.9,
                pitch: 60,
                bearing: -20
            },           
        },
        {
            id: 'section-9',
			title: 'Brisbane employment growth',
            description: '<p>Fish and rice are the backbone of food security in the Lower Mekong countries. Still, a whole host of economic activities contribute to the livelihoods of communities within the basin. These include aquaculture, tourism, forest and non-timber forest products as well as cash crops such as cassava, maize, sugar, coffee, and rubber.</p><p>Most of the Mekong countries are still developing economies, though some struggle more than others. Having suffered three wars in almost 50 years, many people in the region continue to suffer from poverty and malnutrition. Several countries have looked to industrial development for a way out, but this comes with its own risks. Unsustainable development, coupled with climate change’s exacerbating effects, can lead to the over-exploitation of natural resources. Hydropower, for example, takes a huge toll on the environment despite seeming like an attractive source of clean energy and income at first glance.</p><div class="image-block"><img src="assets/img/chapters/pppaday.svg"></div><i>Source: <a href="https://data.opendevelopmentmekong.net/dataset/lower-mekong-poverty-indicators?type=dataset">Published by Open Development Mekong, data from UNDP, Human Development Report, 2015, dataset reference date, March 31, 2016.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 4.2,
                pitch: 0,
                bearing: 0
            },           
        },
        {
            id: 'section-10',
            title: 'Hydropower',
            description: '<p>Hydropower has been gaining momentum in recent decades, and the Mekong’s powerful rapids make it an ideal site. The first dam on the river was completed in 1993, and more than 60 hydropower dams have been built on the Mekong and its tributaries since then. </p><p>The 1,285 megawatt Xayaburi Dam in northern Laos is the first of eleven planned for the lower Mekong River. It’s also the most controversial. Laos went ahead with construction despite its neighbours’ protests, and the dam will have severe repercussions on livelihoods and ecosystems around it. The Xayaburi Dam blocks migration routes for at least <a href="https://www.internationalrivers.org/resources/the-lower-mekong-dams-factsheet-text-7908">23 fish species</a> and restricts sediment passed downstream, severely lowering the amount of harvestable fish and the efficiency of agricultural lands in downstream nations. </p><p>Needless to say, this could jeopardise fish and rice security in the region.</p>',
            location: {
                center: [150.295, -33.730],
                zoom: 14.7,
                pitch: 0,
                bearing: -11.2
            },           
        },
        {
            id: 'section-11',
            description: '<p>The Xayaburi Dam and the eleven others planned for the mainstream river is but a taste of what’s to come in the Mekong basin. Research has shown that the cumulative impact of the Mekong’s tributary dams <a href="http://www.pnas.org/cgi/doi/10.1073/pnas.1201423109">will do more damage to local livelihoods and biodiversity than the better-known mainstream dams.</a> </p><p>There are almost 100 more dams planned for the Mekong basin. Most will be built by Laos (with several funded by Thailand and China), which aims to be the ‘Battery of Asia’. Laos hopes to use the sale of exported hydropower energy to solve the country’s poverty issues.</p><div class="image-block"><img src="assets/img/chapters/dams.svg"></div><i>Source: <a href="https://data.opendevelopmentmekong.net/dataset/greater-mekong-subregion-hydropower-dams-2016">Open Development Mekong. Data compiled by a variety of sources, namely Open Development Cambodia, Open Development Vietnam, International Rivers, CGIAR Challenge Program on Water and Food - Mekong. Date modified October 15, 2019.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },           
        },
        {
            id: 'section-12',
            description: '<p>Rivers that cross transnational boundaries are often sites of dispute, and the Mekong sees its share of strife as a vital shared resource for the region. Despite the Mekong River Commission’s attempt to facilitate discussions between the lower Mekong countries, the breakdown of discussions reflects how countries at the river’s upper end have more bargaining power. Neither China nor Myanmar are members of the Mekong River Commission, and do not need to abide by the organisation’s rules. China, a regional and global economic giant, has built six mainstream dams on the Lancang Jiang already, which allows it to <a href="https://www.nytimes.com/2020/04/13/world/asia/china-mekong-drought.html?fbclid=IwAR1a6KBJX3CShdvGFyoewKTRobryRt9-mmTUKWzidjf7t9ysPMuWZgeEC2w">manage the river’s flow</a>—a move that could compound prolonged drought conditions downstream.</p><p>With so many dams planned for the Mekong, food security becomes as much a political matter as an environmental and socioeconomic one.</p>',
            location: {
                center: [150.295, -33.730],
                zoom: 6.6,
                pitch: 50,
                bearing: -20
            },            
        },
        {
            id: 'section-13',
            title: 'Climate Change',
            description: '<p>Climate change adds to all of this. Rising global temperatures are permanently changing the world’s atmospheric composition, causing cascading effects on ecosystems and life all around the globe.</p><p>The Mekong Delta, <a href="https://www.nature.com/articles/s41467-019-11602-1">barely above sea level</a>, will see more flooding and greater saltwater intrusion as sea levels rise with temperature. This will destroy large swaths of rice crops and <a href-"https://icem.com.au/wp-content/uploads/2014/02/Key-Results-10pgs-lowres.pdf">affect yield in the long-term</a>. By 2100, nearly <a href="https://www.ccacoalition.org/en/file/4111/download?token=h3FhmC10">a third of the delta</a> will be underwater. Rising ocean carbon dioxide levels will also affect the delta’s aquaculture, threatening the region’s food security further. Not to mention, the delta is also gradually sinking. The Mekong Delta is one of the most irrigated rice growing regions, and dependence on over-exploitation of groundwater resources for year-round rice production now contributes to major <a href="https://data.opendevelopmentmekong.net/library_record/impacts-of-25-years-of-groundwater-extraction-on-subsidence-in-the-mekong-delta-vn">land subsidence</a>.</p><div class="image-block"><img src="assets/img/chapters/salinity.svg"></div><i>Source: <a href="https://drive.google.com/file/d/0B5CkRFcwGxMfSlRCT2tNczVJYWc/view">Data by International Centre for Environmental Management (ICEM), Baseline and Projected 2050 Climate Change Salinity Intrusion, DELTA Tools for the Mekong Delta, 2014-2015.</a></i>',
            location: {
                center: [150.295, -33.730],
                zoom: 8.54,
                pitch: 25,
                bearing: -16.8
            },            
        },
         {
            id: 'section-14',
            description: '<p>More dramatically, climate change will disrupt the Mekong’s flow cycle, producing more seasonal extremes. Dry seasons will get drier, as temperatures may rise up to <a href="https://icem.com.au/wp-content/uploads/2014/02/Key-Results-10pgs-lowres.pdf">five degrees by 2050</a>. Wet seasons will be much wetter, and annual precipitation may increase by up to <a href="https://www.ccacoalition.org/en/file/4111/download?token=h3FhmC10">14 percent</a>. With more droughts and floods, food supplies will likely be disrupted, and many farmlands and homes will face imminent destruction. These seasonal extremes also alter fish migration, possibly reducing their already shortened lifespans further.</p><p>Already, we see how extreme seasons today severely impact livelihoods and economies touched by the Mekong. The lower Mekong basin has seen especially severe floods and droughts since 2000, and an extreme drought from November 2019 to January 2020 saw the river’s water levels <a href="http://www.mrcmekong.org/news-and-events/news/drought-continues-to-hit-mekong-countries-risking-stress-on-crop-production-water-shortage/">reach their lowest in at least 60 years</a>. The delta is expected to face <a href="https://www.ccacoalition.org/en/file/4111/download?token=h3FhmC10">severe drought by 2030</a>.</p><div class="image-block"><img src="assets/img/chapters/pcpwetchange.svg"></div><i>Source: <a href="http://portal.gms-eoc.org/maps?cmbIndicatorMapType=data&cmbIndicatorTheme=9&cmbIndicatorMap=30">Data from Greater Mekong Subregion Information Portal, produced by USAID Mekong ARCC, 2014.</a></i>',
             location: {
                center: [150.295, -33.730],
                zoom: 5.2,
                pitch: 0,
                bearing: 0
            },           
        },
        {
            id: 'section-15',
            title: 'Food security',
            description: '<p>So, what does food security really mean for Mekong river countries? The <a href="http://ifpri.org/topic/food-security">UN Committee on World Food Security</a> defines food security as a situation when “all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their food preferences and dietary needs for an active and healthy lifestyle”. Sounds simple and straightforward, but this is actually extremely difficult for many communities to achieve.</p><p>The Mekong has always been a steady source of food and income for its communities—until unsustainable use put this into question. Hydropower development and climate change are arguably the river’s largest threats, but the compounded effects from agricultural activities—water diversion for water irrigation, increased monocropping, agribusiness, and cultivation of genetically modified foods—continue to add to <a href="https://www.researchgate.net/publication/228417279_Water_use_and_competition_in_the_Mekong_Delta_Vietnam">water-use competition</a> in the Mekong. Given that it is the <a href="https://www.sei.org/wp-content/uploads/2019/03/sn-briefings-mta-8mar.pdf">largest consumer of water</a> in the Mekong region, agriculture will also be hit the hardest by climate changes.</p><div class="image-block"><img src="assets/img/chapters/ricechange.svg"></div><i>Source: <a href="http://portal.gms-eoc.org/maps?cmbIndicatorMapType=data&cmbIndicatorTheme=9&cmbIndicatorMap=30">Data from Greater Mekong Subregion Information Portal, produced by USAID Mekong ARCC, 2014.</a></i>',
             location: {
                center: [150.295, -33.730],
                zoom: 5.2,
                pitch: 0,
                bearing: 0
            },           
        },                    
    ],
};
