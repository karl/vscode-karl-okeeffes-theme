class WebSocket[Request: ClassTag, Message](
    subscriptionFactory: SubscriptionFactory[Request, Message],
    authenticationProvider: UserAuthenticationProvider)
    (implicit om: ObjectMapper)
  extends TextWebSocketHandler with SubProtocolCapable with Logging {

  import WebSocket._

  private val RequestClass = implicitly[ClassTag[Request]].runtimeClass.asInstanceOf[Class[Request]]

  private def executeIfAuthenticated(session: WebSocketSession)(f: UserToken => Unit): Unit = {
    val ifAuthenticated = for {
      token <- preAuthenticationToken(session.getHandshakeHeaders)
      authenticationToken <- authenticationProvider.authenticate(token) if authenticationToken.isAuthenticated
    } yield () => f(authenticationToken)
  }

}
