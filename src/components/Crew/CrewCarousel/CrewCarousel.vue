<template>
  <CrewProfile
    :active="active"
    :length="crew.length"
    :name="crewMember.name"
    :description="crewMember.description"
    :header="crewMember.header"
    :src="crewMember.image"
    @change-active="changeActive"
  />
</template>

<script>
import CrewProfile from '../CrewProfile/CrewProfile.vue';

export default {
  name: 'CrewCarousel',
  components: {
    CrewProfile,
  },
  data() {
    return {
      crew: [
        {
            name: 'Douglas Hurley',
            header: 'COMMANDER',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            image: '/src/assets/crew/image-douglas-hurley.webp',
        },
        {
            name: 'MARK SHUTTLEWORTH',
            header: 'MISSION SPECIALIST',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            image: '/src/assets/crew/image-mark-shuttleworth.webp',
        },
        {
            name: 'Victor Glover',
            header: 'PILOT',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
            image: '/src/assets/crew/image-victor-glover.webp',
        },
        {
            name: 'Anousheh Ansari',
            header: 'FLIGHT ENGINEER',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
            image: '/src/assets/crew/image-anousheh-ansari.webp',
        }
        ],
      crewMember: {},
      active: 0,
    };
  },
  methods: {
    changeActive(index) {
      this.active = index;
      this.crewMember = this.crew[index];
    },
  },
  mounted() {
    this.crewMember = this.crew[this.active];
  },
}
</script>

<style scoped>
</style>