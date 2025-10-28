import PlayList from './plays.js'
export default { 
    data() {
        return {
            myList: PlayList,
            working: 'HEY MAN THIS IS WORKING',
            isModalVisible: false,
            selectedPlay:'initial'
        }
    },
    methods: {
        selectPlay(play) {
            this.isModalVisible = true
            this.selectedPlay = play
        },
        closeModal() {
            this.isModalVisible = false
        },
    }
}