<template>
  <div>
    <full-calendar class="test-fc" 
      :events="fcEvents" 
      locale="zh-cn"
      first-day='1'
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <template slot="fc-event-card" slot-scope="p">
            <p><i class="fa">张三</i> {{ p.event.title }} test</p>
        </template>
    </full-calendar>
  </div>
</template>
<script>
import fullCalendar from "./fullCalendar";
let demoEvents = [
  {
    title: "Sunny 725-727",
    start: "2018-05-25",
    end: "2018-05-27",
    cssClass: "family"
  },
  {
    title: "吃饭 726-727",
    start: "2018-02-26",
    end: "2018-02-27",
    cssClass: ["home", "work"]
  },
  {
    title: "吃饭 2/27-2/28",
    start: "2018-02-27",
    end: "2018-02-28"
  },
  {
    title: "吃饭 2/27-2/28",
    start: "2018-02-27",
    end: "2018-02-28"
  },
  {
    title: "吃饭 2/27-2/28",
    start: "2018-02-27",
    end: "2018-02-28"
  },
  {
    title: "吃饭 2/26-3/05",
    start: "2018-02-26",
    end: "2018-03-05"
  },
  {
    title: "吃饭 1/27-1/28",
    start: "2018-01-27",
    end: "2018-01-28"
  },
  {
    title: "吃饭 1/27-2/2",
    start: "2018-01-27",
    end: "2018-02-02"
  },
  {
    title: "吃饭 3/27-3/28",
    start: "2018-03-27",
    end: "2018-03-28"
  }
];

export default {
  data() {
    return {
      name: "Sunny!",
      fcEvents: demoEvents
    };
  },
  methods: {
    changeMonth(start, end, current) {
      console.log(
        "changeMonth",
        start.format(),
        end.format(),
        current.format()
      );
    },
    eventClick(event, jsEvent, pos) {
      console.log("eventClick", event, jsEvent, pos);
    },
    dayClick(day, jsEvent) {
      console.log("dayClick", day, jsEvent);
    },
    moreClick(day, events, jsEvent) {
      console.log("moreCLick", day, events, jsEvent);
    }
  },
  components: {
    fullCalendar
  }
};
</script>
<style lang='scss'>
.app {
  color: green;
}
</style>