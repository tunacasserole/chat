# chatter
Simple app with vue js and a rails 5 api.



# ROADMAP RECAP
Development has now begun as we progress towards our first major milestone on the new Phoenix roadmap.  As a quick review, the roadmap primarily consists of the construction and deployment of the following:

- Micro App Backbone
-- Single Sign On
-- App Registration Mechanism

- 2 sample micro apps
-- Communication Center
-- Issue Tracker (or other)

- Legacy systems hooked up to backbone
-- Phoenix
-- Providers



# TECHNOLOGY SUMMARY
As part of the construction phase, we are vetting and honing our technology decisions and just starting to establish patterns for coding and processes for development.  We will be capturing this information in a variety of artifacts including a UI style guide, API docs, and developer guides.  We will endeavor to create recipes, templates, re-usable components and/or generators where possible to ensure maximum developer productivity as well as maximum code/ui uniformity.

The majority of these patterns and decisions are yet to be nailed down, but here is a sample of what we know so far and again, we will capture this in great detail through the artifacts mentioned above.


## UI Tech Overview.
An analysis and comparison of leading front end technologies was conducted, which can be documented and shared in the next few weeks.  In short, the analysis focused on popular and emerging technologies which would be future-proof and easy to adopt.  The finalists were Rails ERB, Angular, React, & VueJS.  Other less well known options were discarded early including Backbone, Ember and anything too low level such as pure bootstrap and jquery.

* VueJS was selected as the primary language/technology/framework for UI development.
* VuetifyJS was selected as the component-based templating system and strict adherence to OOTB Vuetify components will be observed.

A number of ancilary technologies will feed into the UI development ecosystem.  Some of these are already in place but they may change as our understanding evolves.  This includes things like Stylus for css mgmt, Vuex for store/state mgmt, Vue Router, and so on.

Note:  Utilize https://github.com/vuejs/awesome-vue for a host of other decisions that must be made.


## Backbone Tech Overview.
A similar analysis has been conducted across major back end languages and eco-systems.  Major contenders were Ruby+Rails, Node+Express, Elixir+Phoenix, Go, Rust, and Crystal.  Early eliminations included Java+Spring, C#, Python, PHP.

* Phoenix was selected as the backend framework for net-new development.
* New microapps that will make heavy re-use of existing code will be rails 5 --api-only projects.

While it is our intent to re-examine everything from db technology to single sign-on to branching & deployment, and so on, we will seek to minimize disruption to current processes and create a welcoming path forward for existing resources to cross over.  Many more decisions to be made around the backbone.

Now that the initial assumptions and path forward are laid out, John and Wally will have something concrete to chew on.  Feel free to fire over feedback over the next few weeks and we can also have a call with some code review and demo so you can get more comfortable with the new tech.



# PHOENIX CHATTER
Construction has begun on the the communication center app, which we are calling Phoenix Chatter for the time being.

- Primary Directive
Facilitate all manner of communication within the Phoenix ecosystem between a variety of actors across a variety of channels.

- Supported Channels
-- 1 Way
Broadcast:  admin to user base
Notification:  system to user base

-- 2 way
Conversation:  user base with patient/customer
Help:  user base with admin

- Major Features
1.  Visual notification system.  Support a single, cohesive way to easily and clearly notify users of unread communications of any type across apps.
2.  2-way communication.  Support real-time, reactive chat between any 2 actors.
3.  Images and Files.  Support upload, preview, send and download of common file types.
4.  Notification Preferences.  Support the ability for the user to throttle their notification levels.
5.  History.  Support browsing history and searching across all past communications

- Nice to Have
5.  Avatar.  Ability to upload a picture to create a warmer, social feel.
6.  Chat Rooms.  Support a user's ability to create chat rooms and invite members.
7.  Email Notice.  Support email notifications for unread communications.



# CHATTER UPDATE
UI patterns have been put in place for basic architecture elements including:
- App / Header Bar
- Left Nav
- App Chooser
- Basic List

Primary consideration has been given to supporting phone and tablet views, with the full desktop view taking a backseat.  This is known as mobile-first development and will facilitate the best result across all devices, as opposed to designing primarily for desktop and making after the fact tweaks or separate code lines for mobile and tablet.

For the past 2 weeks, I have been working on a back-less, clickable prototype that demonstrates the above patterns.  This can be shown at any time although I would prefer to show it in a couple of weeks by which time I should have an early stage POC with some working functionality.  Should we put a demo on the calendar for October 13th or 14th?

Next steps...
1.  Continue to flush out remaining UI patterns for CRUD, user profile mgmt, app switching, etc.
2.  Wire up to a simple api-based backend to facilitate crud for conversations and messages.


Lastly...
I know we committed to circulating decisions around approach etc through this new channel, to which we will aim to start that process Monday next week. Both Jason and I wanted to take a little more time to firm things up which we believe we have done, before creating a bunch of unnecessary churn.

Thanks!
Aaron & Jason