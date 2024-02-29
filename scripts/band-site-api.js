// const apiKey = '577cc8f6-2716-45b4-86a4-74684f999ada';
// const apiUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
// const apiKey = '/?api_key=577cc8f6-2716-45b4-86a4-74684f999ada';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.Url = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    }

    async getShowDates() {

        try {
            const showDatesResponse = await axios.get(
                `${this.Url}/showdates?api_key=${apiKey}`
            );
            return showDatesResponse.data;

        } catch (err) {
            console.error('Error getting show dates: Try Again', err);
        }
    }

    async getComments() {

        try {
            const commentsResponse = await axios.get(
                `${this.Url}/comments?api_key=${apiKey}`
            );
            return commentsResponse.data;

        } catch (err) {
            console.error('Error getting comments: Try Again', err);
        }
    }


    async postComment() {
          // Format date and time
        //   const date = new Date();
        //   const formattedDate = date.toISOString(
    //   {
    //   month: '2-digit',
    //   day: '2-digit',
    //   year: 'numeric'
    // }
    // );
  
    // Define object name variable pair, store variables in object
    const postData = {
      name: username,
      comment: review,
    //   timestamp: formattedDate,
    }

        try {
            const postResponse = await axios.post(
                `${this.Url}/comments?api_key=${apiKey}`, JSON.stringify(postData), {
                headers: {
                    'Content-Type': 'application/json'
                }    
        })

        console.log(postResponse.data);
            return JSON.stringify(postResponse);

        } catch (err) {
            console.error('Error posting comment: Try Again', err);
        }
    };


    async deleteComment(commentId) {
        try {
            const delPostResponse = await axios.delete(
                `${this.Url}/comments/${commentId}?=&api_key=${apiKey}`
            );
            console.log("Comment deleted successfully:", delPostResponse);
            return delPostResponse;
        } catch (err) {
            console.error('Error deleting comment:', err);
        }
    }


    async likeComment() {

      try {
          const likeResponse = await axios.post(
              `${this.Url}/comments/${commentId}/like?=&api_key=${apiKey}`
          );

      console.log(likeResponse);
          return likeResponse;

      } catch (err) {
          console.error('Error liking comment: Try Again', err);
      }
  };

};
