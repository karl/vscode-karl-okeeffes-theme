defmodule Messaging.EventsChannel do
    use Phoenix.Channel

    def join("events:"<> private_room_id, _message, socket) do
      socket = assign(socket, :guid, private_room_id)
      {:ok, socket}
    end

    def handle_in("my_event", payload, socket) do
      broadcast! socket, "my_event", payload

      json = Map.put(payload, "delta_time", :os.system_time(:seconds))
      final_json = Map.put(json, "session_guid", socket.assigns.guid)

      changeset = Messaging.Event.changeset(%Messaging.Event{}, %{payload: final_json})
      Messaging.Repo.insert(changeset)

      {:noreply, socket}
    end

    def handle_in("sys_event", payload, socket) do
      broadcast! socket, "sys_event", payload

      json = Map.put(payload, "delta_time", :os.system_time(:seconds))
      final_json = Map.put(json, "session_guid", socket.assigns.guid)

      changeset = Messaging.Event.changeset(%Messaging.Event{}, %{payload: final_json})
      Messaging.Repo.insert(changeset)

      {:noreply, socket}
    end

    def handle_in("negotiation", payload, socket) do
      broadcast! socket, "negotiation", payload

      {:noreply, socket}
    end

    intercept ["my_event"]

    def handle_out("my_event", payload, socket) do
      push socket, "my_event", payload
      {:noreply, socket}
    end

    intercept ["sys_event"]

    def handle_out("sys_event", payload, socket) do
      push socket, "sys_event", payload
      {:noreply, socket}
    end

    intercept ["negotiation"]

    def handle_out("negotiation", payload, socket) do
      push socket, "negotiation", payload
      {:noreply, socket}
    end
  end
