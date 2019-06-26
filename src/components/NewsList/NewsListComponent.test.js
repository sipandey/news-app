import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsListComponent from './NewsListComponent';

configure({ adapter: new Adapter() });

describe('<NewsListComponent />', () => {

    it('should render same number of rows as is the length of the newsList', () => {

        const newsList = JSON.parse(`[{"id":100000006569257,"title":"Strikes on Iran Approved by Trump, Then Abruptly Pulled Back","author":"By MICHAEL D. SHEAR, ERIC SCHMITT, MICHAEL CROWLEY and MAGGIE HABERMAN","abstract":"Military and diplomatic officials still expected a strike as of 7 p.m. Thursday in retaliation for Iran shooting down an unmanned American drone.","publishedDate":"2019-06-20","url":"https://www.nytimes.com/2019/06/20/world/middleeast/iran-us-drone.html","media":[{"type":"image","subtype":"photo","caption":"“Let’s see what happens,” President Trump said Thursday after Iran shot down an American surveillance drone.","copyright":"Erin Schaff/The New York Times","approved_for_syndication":1,"media-metadata":[{"url":"https://static01.nyt.com/images/2019/06/21/us/politics/20dc-military1-sub/20dc-arms1-sub-thumbStandard.jpg","format":"Standard Thumbnail","height":75,"width":75},{"url":"https://static01.nyt.com/images/2019/06/21/us/politics/20dc-military1-sub/merlin_156737610_aeba608a-2048-4990-864d-30da687e888a-mediumThreeByTwo210.jpg","format":"mediumThreeByTwo210","height":140,"width":210},{"url":"https://static01.nyt.com/images/2019/06/21/us/politics/20dc-military1-sub/merlin_156737610_aeba608a-2048-4990-864d-30da687e888a-mediumThreeByTwo440.jpg","format":"mediumThreeByTwo440","height":293,"width":440}]}]}]`);

        const newsListLength = newsList.length;
        const wrapper = shallow(<NewsListComponent newsList={newsList} />);
        expect(wrapper.find('div.col-12')).toHaveLength(newsListLength);
    });

});