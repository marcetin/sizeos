<script>
const Header = resolve => require(['./header'], resolve)
const SecondHeader = resolve => require(['./second'], resolve)
const HeaderLink = resolve => require(['./link'], resolve)
const Title = resolve => require(['./title'], resolve)
const SimpleHeader = resolve => require(['./simple-header'], resolve)
export default {
  Header,
  SecondHeader,
  HeaderLink: HeaderLink,
  HeaderTitle: Title,
  SimpleHeader,
  Title
}
</script>
