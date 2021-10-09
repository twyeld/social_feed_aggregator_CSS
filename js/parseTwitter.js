$(function parseTwitter() {

        var updateFeed = function() {
            var initialQuery = "@LACC_syd,@eastscycling,@BrakesRacing,@rbotcc,@WaratahMasters,@AdelaideUniCC,@tourdownunder,@PortAdelCC,@SthCoastCycling,@NorwoodCycling,@KilkennyCC";//$('#query').val();
            initialQuery = initialQuery.replace(" ", "");
            var queryTags = initialQuery.split(",");
            $('.social-feed-container').socialfeed({
                
                // Twitter
                twitter: {
                    accounts: queryTags,
                    limit: 3,
                    consumer_key: 'JAYgLv9LC2ySjpj9hNtvuWFJb', // make sure to have your app read-only
                    consumer_secret: 'LBaFBXvDXGn40anzy2aWrxlPuLKByPoPx2DhSHGdiSQrPYTwtR', // make sure to have your app read-only
					//consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                    //consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
                
				},

                // GENERAL SETTINGS
                length: 200,
                show_media: true,
                //update_period: 5000,
                // When all the posts are collected and displayed - this function is evoked
                callback: function() {
                    console.log('all posts updated');
					document.getElementById("done").innerHTML="<i>all posts updated<i/>";
                }
            });
        };

        updateFeed();
        $('#button-update').click(function() {
            //first, get rid of old data/posts.
            $('.social-feed-container').html('');

            //then load new posts
            updateFeed();
        });

    });