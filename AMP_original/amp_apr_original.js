define(['pipAPI', 'https://jeremybena.github.io/APR_AMP/AMP_original/AMP_parameters_original.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Francis.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'Control1.jpg'}, 
					{image : 'Control2.jpg'}, 
					{image : 'Control3.jpg'}, 
					{image : 'Control4.jpg'}, 
					{image : 'Control5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'Control1.jpg'}, {image : 'Control2.jpg'}, {image : 'Control3.jpg'}, {image : 'Control4.jpg'}, {image : 'Control5.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://jeremybena.github.io/APR_AMP/images'
		}
	});
});
