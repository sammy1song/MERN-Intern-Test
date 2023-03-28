import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Group7028 from "./components/Group7028";
import Group7236 from "./components/Group7236";
import Group7341 from "./components/Group7341";
import Group7322 from "./components/Group7322";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|property-details)">
          <div className="container-center-horizontal">
            <div className="property-details screen">
              <div className="group-container">
                <img className="group-3" src="/img/group-3@2x.png" alt="Group 3" />
                <div className="group-7022">
                  <div className="create-new-tour gilroy-semibold--normal-white-16px">Create New Tour</div>
                  <img className="line" src="/img/vuesax-linear-add.svg" alt="vuesax/linear/add" />
                </div>
                <div className="group-7029">
                  <Group7028 dashboard="Dashboard" />
                  <Group7028 dashboard="Search Property" className="group-702-2" />
                  <Group7028 dashboard="Calendar" className="group-702-3" />
                  <Group7028 dashboard="My Clients" className="group-702-4" />
                  <Group7028 dashboard="MLS Lists" className="group-702-5" />
                  <Group7028 dashboard="Notifications" className="group-702" />
                </div>
                <Group7028 dashboard="Invite & Earn" className="group-7030" />
                <div className="group-7035">
                  <div className="need-help gilroy-medium--normal-midnight-18px">Need Help?</div>
                  <div className="group-7023">
                    <img
                      className="line"
                      src="/img/vuesax-linear-message-question.svg"
                      alt="vuesax/linear/message-question"
                    />
                    <div className="help-desk gilroy-semibold--normal-midnight-16px">Help Desk</div>
                  </div>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex-row">
                  <div className="group-container-1">
                    <div className="group-7625">
                      <Group7236 />
                      <h1 className="address">
                        <span className="span0">2218 Thornridge Cir..</span>
                        <span className="span1-1"> E5579076</span>
                      </h1>
                    </div>
                    <div className="overlap-group9">
                      <Group7236 className="group-7" />
                    </div>
                  </div>
                  <img className="rectangle-2450" src="/img/rectangle-2450.svg" alt="Rectangle 2450" />
                  <div className="flex-col-1">
                    <div className="flex-row-1">
                      <div className="overlap-group">
                        <img
                          className="icon-notifications-1"
                          src="/img/vuesax-linear-notification-1.svg"
                          alt="icon-notifications"
                        />
                        <div className="frame-1">
                          <div className="number">5</div>
                        </div>
                      </div>
                      <img
                        className="vuesaxlinearsearch-normal"
                        src="/img/vuesax-linear-search-normal.svg"
                        alt="vuesax/linear/search-normal"
                      />
                      <img
                        className="vuesaxlinear"
                        src="/img/vuesax-linear-setting-2.svg"
                        alt="vuesax/linear/setting-2"
                      />
                      <img className="vuesaxlinear" src="/img/vuesax-linear-logout.svg" alt="vuesax/linear/logout" />
                      <div className="group-7034">
                        <div className="group-7031">
                          <img className="ellipse-1" src="/img/ellipse-1@2x.png" alt="Ellipse 1" />
                          <div className="group-7030-1">
                            <div className="berkay-erdinc">Berkay Erdinc</div>
                            <div className="hiberkayerdinccom">hi@berkayerdinc.com</div>
                          </div>
                        </div>
                        <img
                          className="line"
                          src="/img/black-icon-set-arrow-down-s-line.svg"
                          alt="Black Icon Set/arrow-down-s-line"
                        />
                      </div>
                    </div>
                    <div className="overlap-group8">
                      <Group7236 className="group-7349" />
                    </div>
                  </div>
                </div>
                <div className="flex-row-2">
                  <div className="overlap-group2">
                    <div className="flex-row-3">
                      <div className="overlap-group-1">
                        <div className="for-sale">For Sale</div>
                      </div>
                      <div className="frame-6450">
                        <div className="add-list">Add List</div>
                      </div>
                    </div>
                    <div className="mls-e5579076 gilroy-semibold--normal-midnight-18px">MLS#: E5579076</div>
                    <div className="listed-for-1549586">
                      <span className="span0">Listed for: </span>
                      <span className="span1">$1,549,586</span>
                    </div>
                    <p className="address-1">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <Group7341 viewOnMap="View on Map" />
                    <Group7341 viewOnMap="Get Directions" className="group-734" />
                    <Group7341 viewOnMap="Share" className="group-734" />
                    <Group7322 myNotes="My Notes" />
                    <div className="group-7437">
                      <div className="group-7339">
                        <div className="listing-agent">Listing Agent</div>
                        <div className="group-6712">
                          <div className="name">Courtney Henry</div>
                          <div className="group-6227">
                            <img className="turkey-tr" src="/img/turkey--tr-.svg" alt="Turkey (TR)" />
                            <div className="phone">+90 552 489 8277</div>
                          </div>
                        </div>
                      </div>
                      <img className="vuesaxlinearsms" src="/img/vuesax-linear-sms.svg" alt="vuesax/linear/sms" />
                    </div>
                  </div>
                  <div className="overlap-group-container">
                    <div className="overlap-group4">
                      <div className="property-details-1 gilroy-medium--normal-midnight-18px">Property Details</div>
                      <div className="group-7357">
                        <div className="group-7351">
                          <img
                            className="vuesaxlinearbuilding-4"
                            src="/img/vuesax-linear-building-4.svg"
                            alt="vuesax/linear/building-4"
                          />
                          <div className="apartment gilroy-medium--normal-scarpa-flow-16px">Apartment</div>
                        </div>
                        <div className="group-7352">
                          <img className="labed" src="/img/la-bed.svg" alt="la:bed" />
                          <div className="address-2 gilroy-medium--normal-scarpa-flow-16px">3 Bedrooms</div>
                        </div>
                        <div className="group-7353">
                          <img className="phbathtub" src="/img/ph-bathtub.svg" alt="ph:bathtub" />
                          <div className="address-3 gilroy-medium--normal-scarpa-flow-16px">2 Bathrooms</div>
                        </div>
                        <div className="group-7354">
                          <img className="icon-car" src="/img/vuesax-linear-car.svg" alt="icon-car" />
                          <div className="address-4 gilroy-medium--normal-scarpa-flow-16px">2 Garage</div>
                        </div>
                        <div className="group-7355">
                          <img
                            className="vuesaxlinearhome-2"
                            src="/img/vuesax-linear-home-2.svg"
                            alt="vuesax/linear/home-2"
                          />
                          <div className="x1963-sq-ft gilroy-medium--normal-scarpa-flow-16px">1,963 sq. ft.</div>
                        </div>
                        <div className="group-7356">
                          <img
                            className="vuesaxlinearformat-square"
                            src="/img/vuesax-linear-format-square.svg"
                            alt="vuesax/linear/format-square"
                          />
                          <div className="x1176-sq-ft gilroy-medium--normal-scarpa-flow-16px">1,176 sq. ft.</div>
                        </div>
                      </div>
                    </div>
                    <div className="overlap-group5">
                      <div className="flex-row-4">
                        <div className="surname gilroy-semibold--normal-midnight-18px">Key Facts</div>
                        <div className="details gilroy-semibold--normal-scarpa-flow-18px">Details</div>
                        <div className="rooms gilroy-semibold--normal-scarpa-flow-18px">Rooms</div>
                      </div>
                      <div className="overlap-group3">
                        <div className="rectangle-2481"></div>
                        <div className="rectangle-2482"></div>
                      </div>
                      <p className="lorem-ipsum-dolor-si gilroy-medium--normal-scarpa-flow-16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper.
                        Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
                      </p>
                      <div className="group-7367">
                        <div className="group-7359">
                          <div className="flex-row-5">
                            <div className="tax gilroy-semibold--normal-scarpa-flow-16px">Tax</div>
                            <div className="text-1 gilroy-semibold--normal-midnight-16px">$1,340 / 2022</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-6">
                            <div className="type gilroy-semibold--normal-scarpa-flow-16px">Type</div>
                            <div className="single-family gilroy-semibold--normal-midnight-16px">Single-Family</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-7">
                            <div className="building-age gilroy-semibold--normal-scarpa-flow-16px">Building Age</div>
                            <div className="address-5 gilroy-semibold--normal-midnight-16px">5 Year</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-8">
                            <div className="size gilroy-semibold--normal-scarpa-flow-16px">Size</div>
                            <div className="x1500-2000-feet2 gilroy-semibold--normal-midnight-16px">
                              1500 - 2000 feet2
                            </div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="parking-container">
                            <div className="parking gilroy-semibold--normal-scarpa-flow-16px">Parking</div>
                            <p className="detached-2-garage-6-parking gilroy-semibold--normal-midnight-16px">
                              Detached 2 Garage, 6 Parking
                            </p>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-9">
                            <div className="basement gilroy-semibold--normal-scarpa-flow-16px">Basement</div>
                            <div className="unfinished gilroy-semibold--normal-midnight-16px">Unfinished</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-10">
                            <div className="mls gilroy-semibold--normal-scarpa-flow-16px">MLS#</div>
                            <div className="e5579076 gilroy-semibold--normal-midnight-16px">E5579076</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-736">
                          <div className="flex-row-11">
                            <div className="possesion gilroy-semibold--normal-scarpa-flow-16px">Possesion</div>
                            <div className="address-6 gilroy-semibold--normal-midnight-16px">5 Day</div>
                          </div>
                          <div className="rectangle-2483"></div>
                        </div>
                        <div className="group-7199">
                          <div className="description gilroy-medium--normal-midnight-18px">Description</div>
                          <p className="lorem-ipsum-dolor-si-1">
                            <span className="span0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis
                              semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet
                              semper tempus. Etiam auctor lacus leo{" "}
                            </span>
                            <span className="span1">read more..</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group7">
                    <div className="flex-row-12">
                      <div className="shortcuts gilroy-medium--normal-midnight-18px">Shortcuts</div>
                      <div className="frame-6448">
                        <img
                          className="vuesaxlinearfatrows"
                          src="/img/vuesax-linear-fatrows.svg"
                          alt="vuesax/linear/fatrows"
                        />
                      </div>
                    </div>
                    <div className="overlap-group1">
                      <div className="notify-similar-properties">Notify similar properties</div>
                      <div className="group-6145">
                        <div className="rectangle-2336"></div>
                      </div>
                    </div>
                    <div className="group-7322-1">
                      <img className="line" src="/img/vuesax-linear-key.svg" alt="vuesax/linear/key" />
                      <div className="surname-1 gilroy-semibold--normal-white-16px">Key Facts</div>
                    </div>
                    <Group7322 myNotes="Property History" className="group-73" />
                    <Group7322 myNotes="Demographics" className="group-73" />
                    <Group7322 myNotes="Points of interest" className="group-73" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
