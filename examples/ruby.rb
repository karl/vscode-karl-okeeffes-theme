module ClassroomTechnologies
  class ClassroomTechnology

    def self.return_name(id)
      case id.to_i
      when 0
        "Webex"
      when 1
        "ToxBox"
      when 2
        "Saypage"
      when 3
        "Saypage 80"
      when 4
        "Experimental"
      when 5
        "Saypage Force Flash"
      when 6
        "Saypage 80"
      when 7
        "Saypage 80"
      when 8
        "Saypage 80"
      when 9
        "Twilio"
      when 10
        "Plivo"
      when 11
        "Twilio Force Flash"
      when 12
        "Silent"
      when 13
        "Xirsys"
      when 14
        "XirsysRecording"
      when 15
        "Kurento"
      when 16
        "KurentoSeparateRecord"
      when 17
        "KurentoTutorRecord"
      when 18
        "KurentoTsl"
      when 19
        "Janus"
      when 20
        "XirsysHosted"
      when 21
        "Tabula Janus"
      when 22
        "Tabula Twillio"
      end
    end

    def self.getTechnology(id, attrs ={})
      case id.to_s
      when '0'
        return ClassroomTechnologies::ClassroomTechnologyWebex.new attrs
      when '1'
        return ClassroomTechnologies::ClassroomTechnologyKosmosTokbox.new attrs
      when '2'
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage.new attrs
      when '3'
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage80.new attrs
      when '4'
        return ClassroomTechnologies::ClassroomTechnologyKosmosExperimental.new attrs
      when '5'
        attrs.store(:force_flash, true)
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage80.new attrs
      when '6'
        attrs.store(:tech_check, false)
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage80.new attrs
      when '7'
        attrs.merge!({tech_check:false, force_flash:true})
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage80.new attrs
      when '8'
        attrs.merge!({tech_check:false, force_flash:true, force_protocol: 'RTMPS'})
        return ClassroomTechnologies::ClassroomTechnologyKosmosSayPage80.new attrs
      when '9'
        return ClassroomTechnologies::ClassroomTechnologyKosmosTwilio.new attrs
      when '10'
        return ClassroomTechnologies::ClassroomTechnologyKosmosPlivo.new attrs
      when '11'
        return ClassroomTechnologies::ClassroomTechnologyKosmosTwilioFlash.new attrs
      when '12'
        return ClassroomTechnologies::ClassroomTechnologyKosmosSilent.new attrs
      when '13'
        return ClassroomTechnologies::ClassroomTechnologyKosmosXirsys.new attrs
      when '14'
        return ClassroomTechnologies::ClassroomTechnologyKosmosXirsysRecording.new attrs
      when '15'
        return ClassroomTechnologies::ClassroomTechnologyKosmosKurento.new attrs
      when '16'
        return ClassroomTechnologies::ClassroomTechnologyKosmosKurentoSeparateRecord.new attrs
      when '17'
        return ClassroomTechnologies::ClassroomTechnologyKosmosKurentoTutorRecord.new attrs
      when '18'
        return ClassroomTechnologies::ClassroomTechnologyKosmosKurentoTsl.new attrs
      when '19'
        return ClassroomTechnologies::ClassroomTechnologyKosmosJanus.new attrs
      when '20'
        return ClassroomTechnologies::ClassroomTechnologyKosmosXirsysHosted.new attrs
      when '21'
        return ClassroomTechnologies::ClassroomTechnologyKosmosJanus.new attrs
      when '22'
        # This will need to be updated the moment we will have an actual Twillio Tech ready
        return ClassroomTechnologies::ClassroomTechnologyKosmosJanus.new attrs
      end
      ClassroomTechnologies::ClassroomTechnologyBase.new
  	end

    # Why are these IDs strings? Didn't they used to be integers?
    # Is it because passing zero into the URL causes JS problems?

    # I am not sure atm, will test as integers and change if all will be good. MK
    def self.webex_id;               '0';  end
    def self.kosmos_tokbox_id;       '1';  end
    def self.kosmos_say_page_id;     '2';  end
    def self.kosmos_say_page_80_id;  '3';  end
    def self.kosmos_experimental_id; '4';  end
    def self.kosmos_twilio_id;       '9';  end
    def self.kosmos_plivo_id;        '10';  end
    def self.kosmos_twilio_flash_id; '11'; end
    def self.kosmos_silent_id; '12'; end
    def self.kosmos_xirsys_id; '13'; end
    def self.kosmos_xirsys_recording_id; '14'; end
    def self.kosmos_kurento_id; '15'; end
    def self.kosmos_kurento_separate_record_id; '16'; end
    def self.kosmos_kurento_tutor_record_id; '17'; end
    def self.kosmos_kurento_tsl_id; '18'; end
    def self.kosmos_janus_id; '19'; end
    def self.kosmos_xirsys_hosted_id; '20'; end
    def self.tabula_janus_id; '21'; end
    def self.tabula_twillio_id; '22'; end

    # TODO Move this into the class_tech_[type] classes themselves
    def self.get_voip_param(id, type)
      case type
      when "Student"
        case id.to_s
          # when '2' then return "recording_type=voiceonly"
          # when '3' then return "recording_type=voiceonly"
          when '5' then return "forceFlash=true"
          when '6' then return "techcheck=false"
          when '7' then return "techcheck=false&forceFlash=true"
          when '8' then return "forceFlash=true&forceProtocol=RTMPS"
        end
      when "Tutor"
        case id.to_s
          # when '2' then return "recording_type=voiceonly"
          # when '3' then return "recording_type=voiceonly"
          when '5' then return "forceFlash=false"
          when '6' then return "techcheck=false"
          when '7' then return "techcheck=false&forceFlash=false"
          when '8' then return "forceFlash=true&forceProtocol=RTMPS"
        end
      else
        case id.to_s
          # when '2' then return "recording_type=voiceonly"
          # when '3' then return "recording_type=voiceonly"
          when '5' then return "forceFlash=true"
          when '6' then return "techcheck=false"
          when '7' then return "techcheck=false&forceFlash=true"
          when '8' then return "forceFlash=true&forceProtocol=RTMPS"
        end
      end
    end

    # always skip kosmos_test_settings page.
    def self.skip_kosmos_test_setting?(id)
      true
    end

    # Needs better solution
    def self.available_technologies
      %w(webex kosmos_tokbox kosmos_saypage kosmos_saypage_80 kosmos_experimental kosmos_saypage_80_forceFlash kosmos_saypage_80_skip_techcheck kosmos_saypage_80_skip_techcheck_and_force_flash kosmos_saypage_80_RTMPS kosmos_twilio kosmos_plivo kosmos_twilio_flash silent xirsys xirsys_recording kurento kurentoSR kurentoTR kurentoTSL janus XirsysHosted)
    end

    def self.available_technologies_shortcuts
      %w(W KT KS KS80 KEX KSFF80 KSSS80 KSFF80 KSRTPMS80 T P TF S X XR K KSR KTR KTSL J XH TBLJ TBLT)
    end

    def self.classroom_tech_options
      # for use in views/schools/_form.json.erb
      available_technologies.each_with_index.map { |t,i| [t, i] }
    end

    def self.classroom_tech_dev_list_options
      get_developers_technology_list.each.map { |t| [return_name(t),t] }
    end

    def self.technology_name(id)
      available_technologies[id]
    end

    def self.technology_name_shortcut(id)
      return if id.nil?
      available_technologies_shortcuts[id]
    end

    def self.get_supported_technology_list
      [self.webex_id, self.kosmos_twilio_id]
    end

    def self.get_developers_technology_list
      [self.kosmos_janus_id, self.tabula_janus_id]
    end

  	def get_control_panel_url
  	end

    def self.supertech
      servers = Settings.elastic_turn.map{|a| a.to_hash}
      fields = { 'domain'      => Settings.xirsys_domain,
        'application' => Settings.xirsys_application,
        'room'        => Settings.xirsys_application,
        'username'    => Settings.xirsys_username,
        'ident'       => Settings.xirsys_username,
        'secret'      => Settings.xirsys_api_key,
        'secure'      => '1'
      }
      fields_string = fields.to_param
      uri = URI.parse(Settings.xirsys_ice_endpoint)
      path = '/ice'
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.read_timeout = 5
      resp = http.start() {|http|
        http.post(path, fields_string)
      }
      begin
        servers.push(JSON.parse(resp.body)['d']['iceServers']).flatten
      rescue Exception => e
      end
      begin
        t = Twilio::REST::Client.new(Settings.twilio_account_sid, Settings.twilio_auth_token)
        twilio_result = t.account.tokens.create()
        servers.push(twilio_result.ice_servers).flatten
      rescue Exception => e
      end
      return servers.flatten
    end

    def self.twilio
      servers = []
      begin
        t = Twilio::REST::Client.new(Settings.twilio_account_sid, Settings.twilio_auth_token)
        twilio_result = t.account.tokens.create()
        servers.push(twilio_result.ice_servers).flatten
      rescue Exception => e
      end
      return servers.flatten
    end

    def self.ireland
      servers = Settings.elastic_turn.map{|a| {
        "url" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.ireland2
      servers = Settings.elastic_turn2.map{|a| {
        "url" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.india
      servers = Settings.elastic_turn_india.map{|a| {
        "url" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.london
      servers = Settings.elastic_turn_london.map{|a| {
        "url" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.testing
      servers = Settings.elastic_turn_testing.map{|a| {
        "url" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.xirsys
      begin
        link = URI.parse(Settings.xirsys_url)
        request = Net::HTTP::Put.new(link.path)
        request.basic_auth(Settings.xirsys_username, Settings.xirsys_api_key)
        http = Net::HTTP.new(link.host, link.port)
        http.use_ssl = true
        resp = http.start() {|http|
          http.request(request)
        }
        servers = JSON.parse(resp.body)['v']['iceServers']
      rescue Exception => e
        Rollbar.error(e)
      end
      return servers || self.london
    end

    def self.xirsys_hosted_london
      servers = Settings.xirsys_hosted_turn_london.map{|a| {
        "urls" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.xirsys_hosted_frankfurt
      servers = Settings.xirsys_hosted_turn_frankfurt.map{|a| {
        "urls" => a["url"],
        "username" => a["username"],
        "credential" => a["credential"],
      }.compact }
      return servers
    end

    def self.get_turn_credenitals(current_user)
      case current_user.turn_type
      when 'twilio'
        return self.twilio
      when 'india'
        return self.india
      when 'london'
        return self.london
      when 'testing'
        return self.testing
      else
        if current_user.id.even?
          return self.ireland2
        else
          return self.ireland
        end
      end
    end

    def self.classroom_tech_locations(classroom_technology_id)
      getTechnology(classroom_technology_id).locations
    end

    def self.default_config
      ClassroomTechnologyDefaultConfig.last
    end
  end
end
