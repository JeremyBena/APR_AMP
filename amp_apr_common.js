define(['pipAPI', 'https://jeremybena.github.io/AMP_APR_2/AMP_APR/original_AMP/AMP_task.js'], function(APIConstructor, ampExtension){

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
