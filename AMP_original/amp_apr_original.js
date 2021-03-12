define(['pipAPI', 'https://jeremybena.github.io/APR_AMP/AMP_original/AMP_parameters_original.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}, 
					{image : 'b12.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'b12.jpg'}, {image : 'b12.jpg'}, {image : 'b12.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});
