import './timeline.css';


function Timeline() {

    const publi = [
        { "title": "Publication 1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam. Mattis pellentesque id nibh tortor id aliquet. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Purus in massa tempor nec feugiat. Tellus orci ac auctor augue. Morbi non arcu risus quis varius. Dui vivamus arcu felis bibendum. Ut sem nulla pharetra diam sit amet nisl suscipit. Viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id volutpat. Viverra tellus in hac habitasse platea. Blandit aliquam etiam erat velit scelerisque. Arcu bibendum at varius vel pharetra vel. Tempus urna et pharetra pharetra massa massa ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. In dictum non consectetur a erat nam at. Ultrices mi tempus imperdiet nulla. Ipsum consequat nisl vel pretium lectus quam.\n\nNibh tellus molestie nunc non blandit massa enim. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Euismod lacinia at quis risus sed vulputate odio ut enim. Accumsan lacus vel facilisis volutpat. Lacus sed viverra tellus in. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Pharetra vel turpis nunc eget lorem dolor. Nulla facilisi etiam dignissim diam quis enim lobortis. Ullamcorper velit sed ullamcorper morbi tincidunt. Id semper risus in hendrerit gravida rutrum quisque non. Orci ac auctor augue mauris augue neque gravida in fermentum. Arcu odio ut sem nulla pharetra diam sit. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Nec sagittis aliquam malesuada bibendum. Urna molestie at elementum eu. Libero nunc consequat interdum varius.\n\nIn nisl nisi scelerisque eu ultrices vitae. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Fames ac turpis egestas maecenas pharetra convallis. Netus et malesuada fames ac turpis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Mauris pharetra et ultrices neque. Vitae suscipit tellus mauris a diam. Et ultrices neque ornare aenean euismod elementum nisi quis. Pulvinar neque laoreet suspendisse interdum. Eget velit aliquet sagittis id consectetur. Platea dictumst quisque sagittis purus sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Eget dolor morbi non arcu risus quis varius. Viverra vitae congue eu consequat ac felis. Nunc id cursus metus aliquam eleifend. Ipsum suspendisse ultrices gravida dictum fusce." },
        { "title": "Publication 2", "content": "Ceci est la deuxième publication" },
        { "title": "Publication 3", "content": "La troisème publication, la voici" }
    ];
    const toutes_les_publis = [];

    for (let publicc of publi) {
        toutes_les_publis.push(<article id="bigger"><h1>{publicc.title}</h1><br></br><p class="content">{publicc.content}</p><textarea type="text" class="comment" placeholder='Write a comment'></textarea></article>);
    }

    return (
        <div class="timeline">
            {toutes_les_publis}

        </div >
    );
}

export default Timeline;