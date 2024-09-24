import {Link} from "react-router-dom";
import {Button, Flex, Result} from "antd";

export default function ErrorPage() {
    return <Flex vertical justify={'center'} style={{height: "100%", width: '100vw'}}>
      <Result
      status="500"
      subTitle={"Sorry, an unexpected error has occurred."}
      extra={<Link to={'/'}>
        <Button
          type={'primary'}
        >
          Go to home page...
        </Button>
      </Link>}
    />
    </Flex>
}